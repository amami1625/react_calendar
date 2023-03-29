const CalFoot = ({ showToday }) => {
  return (
    <tfoot>
      <tr>
        <td colSpan='7' className="text-center cursor-pointer" onClick={showToday}>Today</td>
      </tr>
    </tfoot>
  );
};

export default CalFoot;