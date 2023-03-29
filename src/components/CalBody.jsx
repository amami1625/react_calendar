import Week from "./Week";

const CalBody = ({ calender }) => {
  return (
    <tbody>
      {calender.map((week, i) => <Week key={i} week={week}/>)}
    </tbody>
  );
};

export default CalBody;