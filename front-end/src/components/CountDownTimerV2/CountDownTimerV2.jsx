import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { CountDownCard } from "../CountDownCard";
import { Heading } from "../Typography";

import "./CountDownTimerV2.css";

dayjs.extend(utc);
dayjs.extend(timezone);

const getCurrentTimeInVietnam = () => {
  return dayjs().tz("Asia/Ho_Chi_Minh");
};

const calculateDateDifferenceVN = (date1, date2) => {
  const d1 = dayjs(date1);
  const d2 = dayjs(date2);

  let diffSeconds = d2.diff(d1, "second");
  if (diffSeconds <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diffSeconds / 86400),
    hours: Math.floor(diffSeconds / 3600) % 24,
    minutes: Math.floor(diffSeconds / 60) % 60,
    seconds: diffSeconds % 60,
  };
};

export const CountDownTimerV2 = ({ targetDate = "2026-10-12T00:00:00+07:00" }) => {
  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  const DaysCardRef = useRef(null);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const currentVNTime = getCurrentTimeInVietnam();
      const remaining = calculateDateDifferenceVN(currentVNTime, targetDate);

      setDays(remaining.days);
      setHours(remaining.hours);
      setMinutes(remaining.minutes);
      setSeconds(remaining.seconds);
    };

    updateTime();
  }, [targetDate]);

  // Countdown interval
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        let newSeconds = prev - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes = newMinutes - 1;
          MinutesCardRef.current?.classList.toggle("rotate");
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours = newHours - 1;
          HoursCardRef.current?.classList.toggle("rotate");
        }

        if (newHours < 0) {
          newHours = 23;
          newDays = newDays - 1;
          DaysCardRef.current?.classList.toggle("rotate");
        }

        setMinutes(newMinutes);
        setHours(newHours);
        setDays(newDays);

        SecondsCardRef.current?.classList.toggle("rotate");
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes]);

  return (
    <div className="countdown-container">
      <Heading className="countdown-heading" level={2}>
        We will close this form in
      </Heading>
      <div className="countdown-cards-container">
        <CountDownCard label="days" number={days} cardRef={DaysCardRef} />
        <span>:</span>
        <CountDownCard label="hours" number={hours} cardRef={HoursCardRef} />
        <span>:</span>
        <CountDownCard label="minutes" number={minutes} cardRef={MinutesCardRef} />
        <span>:</span>
        <CountDownCard label="seconds" number={seconds} cardRef={SecondsCardRef} />
      </div>
    </div>
  );
};
