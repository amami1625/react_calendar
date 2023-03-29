import Date from "./Date";

const Week = ({ week }) => {
  return (
    <tr>
      {week.map((date, i) => <Date key={i} date={date}/>)}
    </tr>
  )
};

export default Week;