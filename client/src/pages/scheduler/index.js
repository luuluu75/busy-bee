import {useState} from "react";
import { format, isSameMonth, isSameDay, isAfter, isFuture, addHours} from "date-fns";
import { takeDay } from "../../modules/Calendar";


function GetWeek() {

   return ( 
       <div className=
          {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(
                 (dayName, i) => ( 
              <div className={
                     `bg-blue-200 h-20 w-20 flex items-center justify-center border-rounded-xl border-blue-200 ${cornerClassName(i)}`}> 
              {dayName} 
              </div>
            ),
          )} 
}

export default function Calendar() {

   const [selectedDate, setSelectedDate] = useState(new Date());
   const data = takeMonth(selectedDate)();

   function dayColor(day) {
      if(!isSameMonth(day, selectedDate)) return "text-gray-400";
      if(isSameDay(day, selectedDate)) return "bg-green-400";
   }

   function cornerClassName(weekIndex, dayIndex) {
      if (weekIndex !== data.length -1) return;
      if (dayIndex === 0) return "rounded-bl-xl"
      if (dayIndex === 6) return "rounded-br-xl"
   }

   return (
      <div className = {"bg-white box-border m-8 flex"}>
            <div className = {"border rounded-xl p-2"}>
               <h1 className="flex w-full items-center justify-center font-extrabold mb-2 tracking-wider">
                  {format(selectedDate, "MMMM")}{" "}
                  {format(selectedDate, "yyyy")}
               </h1>
               <GetWeek />
               {data.map((week, wi) => (
               <div className={"grid grid-cols-7"}>
                  {week.map((day, di) => (
                     <div 
                     onClick={() => setSelectedDate(day)}
                     className={
                        `h-20 w-20 flex items-center justify-center border border-blue-200 ${dayColor(day,)} ${cornerClassName(wi,di)}`}>
                     {format(day, 'dd')}
                     </div>
                  ))}   
               </div>     
               ))} 
         </div>
     </div>
   );
}


export function takeDay(req, res) {
    return res.takeDay
}


const date1 = new Date();
const date2 = addHours(new Date(), 5);
console.log(`Date1 is ${isAfter(date1, date2) ? "after" : "before"} Date2`);
console.log(`Date2 is ${isFuture(date2) ? "not" : ""} in the past`);