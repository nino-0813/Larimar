"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  eachDayOfInterval,
  isBefore,
  startOfToday,
} from "date-fns";
import { ja } from "date-fns/locale";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const timeSlots = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "美容室（カット）",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;
    fetch("/api/reservations")
      .then((res) => res.json())
      .then((list: Array<{ date?: string; time?: string }>) => {
        if (cancelled || !Array.isArray(list)) return;
        const set = new Set<string>();
        list.forEach((r) => {
          if (r.date && r.time) set.add(`${r.date}_${r.time}`);
        });
        setBookedSlots(set);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const isTimeBooked = (date: Date, time: string) =>
    bookedSlots.has(`${format(date, "yyyy-MM-dd")}_${time}`);

  const isDateFull = (day: Date) =>
    timeSlots.every((t) => isTimeBooked(day, t));

  const renderHeader = () => (
    <div className="flex items-center justify-between mb-8">
      <button
        onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        className="p-2 hover:bg-stone-100 rounded-full transition-colors"
        type="button"
      >
        <ChevronLeft size={20} />
      </button>
      <h3 className="text-xl font-serif text-stone-800">
        {format(currentMonth, "yyyy年 MMMM", { locale: ja })}
      </h3>
      <button
        onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        className="p-2 hover:bg-stone-100 rounded-full transition-colors"
        type="button"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    return (
      <div className="grid grid-cols-7 mb-4">
        {days.map((day, i) => (
          <div
            key={i}
            className="text-center text-[10px] uppercase tracking-widest text-stone-400 font-bold"
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

    return (
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, i) => {
          const isSelected = isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isPast = isBefore(day, startOfToday());
          const full = !isPast && isDateFull(day);
          const disabled = isPast || full;

          return (
            <button
              key={i}
              type="button"
              disabled={disabled}
              onClick={() => {
                setSelectedDate(day);
                setSelectedTime(null);
              }}
              className={`
                aspect-square flex flex-col items-center justify-center rounded-xl text-sm transition-all relative
                ${!isCurrentMonth ? "text-stone-200" : ""}
                ${isSelected ? "bg-sage-600 text-white luxury-shadow" : "hover:bg-sage-50"}
                ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
                ${full ? "line-through" : ""}
              `}
            >
              <span>{format(day, "d")}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const handleReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: format(selectedDate, "yyyy-MM-dd"),
          time: selectedTime,
        }),
      });

      if (response.ok) {
        setStep(3);
      } else {
        alert("予約に失敗しました。もう一度お試しください。");
      }
    } catch {
      alert("通信エラーが発生しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 3) {
    return (
      <div className="pt-32 pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-white p-16 rounded-3xl luxury-shadow text-center"
        >
          <div className="w-20 h-20 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-sage-600" size={40} />
          </div>
          <h2 className="text-3xl font-serif mb-6">ご予約を承りました</h2>
          <p className="text-stone-500 mb-10 leading-relaxed">
            ご予約ありがとうございます。
            <br />
            {format(selectedDate, "yyyy年MM月dd日")} {selectedTime}{" "}
            のご来店をお待ちしております。
            <br />
            福山市沼隈町 Larimar（ラリマー）でお会いしましょう。
          </p>
          <Link
            href="/"
            className="inline-block bg-stone-800 text-white px-12 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-sage-600 transition-all"
          >
            トップに戻る
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-6 bg-stone-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sage-600 text-xs uppercase tracking-[0.5em] mb-4 block">
            Booking
          </span>
          <h2 className="text-4xl md:text-6xl font-serif">ご予約</h2>
          <p className="text-stone-500 mt-4 text-sm">9:00〜21:00（最終受付20:00）・不定休</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl luxury-shadow luxury-border">
                  <h4 className="text-sm uppercase tracking-widest font-bold text-stone-400 mb-8">
                1. 日付を選ぶ
              </h4>
              {renderHeader()}
              {renderDays()}
              {renderCells()}
            </div>

            <AnimatePresence>
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-3xl luxury-shadow luxury-border"
                >
                  <h4 className="text-sm uppercase tracking-widest font-bold text-stone-400 mb-8">
                2. 時間を選ぶ
              </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {timeSlots.map((time) => {
                      const booked = isTimeBooked(selectedDate, time);
                      return (
                        <button
                          key={time}
                          type="button"
                          disabled={booked}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            py-3 rounded-xl text-sm transition-all
                            ${
                              booked
                                ? "bg-stone-100 text-stone-300 cursor-not-allowed line-through"
                                : selectedTime === time
                                  ? "bg-stone-800 text-white"
                                  : "bg-stone-50 hover:bg-sage-50 text-stone-600"
                            }
                          `}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl luxury-shadow luxury-border sticky top-32">
              <h4 className="text-sm uppercase tracking-widest font-bold text-stone-400 mb-8">
                3. お客様情報
              </h4>
              <form onSubmit={handleReservation} className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">
                    Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full border-b border-stone-200 py-2 outline-none focus:border-sage-600 transition-colors bg-transparent text-sm"
                  >
                    <option>美容室（カット）</option>
                    <option>美容室（カラー）</option>
                    <option>美容室（パーマ）</option>
                    <option>マツエク</option>
                    <option>リンパマッサージ</option>
                    <option>よもぎ蒸し</option>
                    <option>ハーブ蒸し</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="お名前"
                    className="w-full border-b border-stone-200 py-2 outline-none focus:border-sage-600 transition-colors bg-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="メールアドレス"
                    className="w-full border-b border-stone-200 py-2 outline-none focus:border-sage-600 transition-colors bg-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block mb-2">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="電話番号"
                    className="w-full border-b border-stone-200 py-2 outline-none focus:border-sage-600 transition-colors bg-transparent text-sm"
                  />
                </div>

                <div className="pt-6 border-t border-stone-100">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">Date:</span>
                    <span className="text-stone-800 font-medium">
                      {format(selectedDate, "yyyy/MM/dd")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-6">
                    <span className="text-stone-400">Time:</span>
                    <span className="text-stone-800 font-medium">
                      {selectedTime || "未選択"}
                    </span>
                  </div>

                  <button
                    disabled={!selectedTime || isSubmitting}
                    type="submit"
                    className={`
                      w-full py-4 rounded-full text-xs tracking-widest uppercase transition-all
                      ${
                        !selectedTime || isSubmitting
                          ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                          : "bg-sage-600 text-white hover:bg-sage-800 luxury-shadow"
                      }
                    `}
                  >
                    {isSubmitting ? "送信中..." : "予約を確定する"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
