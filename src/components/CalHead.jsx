const CalHead = ({ year, month, showPrev, showNext }) => {
  return (
    <thead>
      <tr>
        <th colSpan='5'>{year} / {month + 1}</th>
        <th colSpan='1' className="cursor-pointer" onClick={showPrev}>&lt;</th>
        <th colSpan='1' className="cursor-pointer" onClick={showNext}>&gt;</th>
      </tr>
      <tr>
        <th>日</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
        <th>土</th>
      </tr>
    </thead>
  )
};

export default CalHead;