import {useState, useEffect} from "react";
import { format, isSameMonth, isSameDay} from "date-fns";
import { takeMonth } from "../../modules/Calendar";
import DaySchedule from "../../modules/DaySchedule";
import axios from "axios";


function GetWeek() {

   function cornerClassName(i) {
      if (i === 0) return "rounded-tl-xl"
      if (i === 6) return "rounded-tr-xl"
   }

   return ( 
       <div className={'grid grid-cols-7'}> 
          {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(
                 (dayName, i) => ( 
              <div className={
                     `bg-blue-200 h-20 w-20 flex items-center justify-center border-rounded-xl border-blue-200 ${cornerClassName(i)}`}> 
              {dayName} 
              </div>
            ),
          )} 
       </div>
   );
}

export default function Calendar() {

   const [selectedDate, setSelectedDate] = useState(new Date());
   const data = takeMonth(selectedDate)();

   useEffect(() => {
      axios.get("http://localhost:3000/api/calendarItems")
      .then(response => {
         console.log(response)
      }  
      )}, [])

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
      <div className={"flex"}>
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
     <div><DaySchedule />
     </div>
     </div>
   );
}
