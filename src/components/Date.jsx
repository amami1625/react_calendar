const Date = ({ date }) => {
  return <td className={`text-center first:text-red-600 last:text-sky-500 ${date.isToday ? 'bg-gray-200' : ''}`}>{date.date}</td>
};

export default Date;