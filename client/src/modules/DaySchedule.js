const { eachHourOfInterval, startOfHour,startOfDay, addHours, endOfDay } = require("date-fns");

//get the number of hours in a day//
function getHour(start = new Date()) {

    let hour = startOfHour(startOfDay(start));
   
      return function () {
            const day = [...Array(24)].map((_, i) => addHours(hour, i));
             hour = addHours(day[23], 1);
           return day;
      };
    }

// export function takeDay(start = new Date()) {
//         let userDate = [];
//         let time = start;

    // function lastHourOfDay(range) {
    //     return range[range.length - 1][23];
    // }

//     return function () {
//         const dayGen = getHour(startOfDay(time));
//         const lastHour = startOfHour((endOfDay(start)))
//         userDate.push(dayGen());

//         while (lastHourOfDay(day) < lastHour) {
//             userDate.push(dayGen());
//         }

//         const range = userDate;
//         userDate = [];
//         time = addHours(lastHourOfDay(range), 1);

//         return range;
//     };
// }     

function DaySchedule() {
var hours = [...Array(24)]
    
return (
    <div> 
        {hours.map((_, i) => {
       return <div>{i}</div>
        })}
    </div>

)
}

export default DaySchedule;
