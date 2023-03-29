import CalHead from "./CalHead";
import CalBody from "./CalBody";
import CalFoot from "./CalFoot";
import { useEffect, useState } from "react";

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [calender, setCalendar] = useState([]);

  useEffect(() => {
    createCal();
  }, [month])

  const getCalHead = () => {
    const dates = [];
    const firstDay = new Date(year, month, 1).getDay();
    for(let i = 0; i < firstDay; i++) {
      dates.unshift({
        date: new Date(year, month, i * -1).getDate(),
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  };

  const getCalBody = () => {
    const dates = [];
    const today = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
    }
    const lastDay = new Date(year, month + 1, 0).getDate();
    for(let i = 1; i <= lastDay; i++) {
      dates.push({
        date: i,
        isToday: today.year === year && today.month === month && today.date === i ? true : false,
        isDisabled: false,
      });
    }
    return dates;
  };

  const getCalTail = () => {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();
    for(let i = 1; i <= 6 - lastDay; i++) {
      dates.push({
        date: new Date(year, month + 1, i).getDate(),
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  };

  const createCal = () => {
    const calData = [];
    const dates = [...getCalHead(), ...getCalBody(), ...getCalTail()];
    const weeks = dates.length / 7;
    for(let i = 0; i < weeks; i++) {
      calData.push(dates.splice(0, 7));
    }
    setCalendar(calData);
  };

  const showPrev = () => {
    if(month === 0) {
      setYear(prev => prev - 1);
      setMonth(11);
    }else{
      setMonth(prev => prev - 1);
    }
  };

  const showNext = () => {
    if(month === 11) {
      setYear(prev => prev + 1);
      setMonth(0);
    }else{
      setMonth(prev => prev + 1);
    }
  };

  const showToday = () => {
    setYear(new Date().getFullYear());
    setMonth(new Date().getMonth());
  };

  return (
    <div className="w-3/12">
      <table className="w-full">
        <CalHead year={year} month={month} showPrev={showPrev} showNext={showNext}/>
        <CalBody calender={calender}/>
        <CalFoot showToday={showToday}/>
      </table>
    </div>
  )
};

export default Calendar;