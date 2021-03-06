import { Calendar, Badge } from 'antd';

function getListData(value) {
  let listData;
  // switch (value.date()) {
  //   case 10:
  //     listData = [
  //       { type: "success", content: 'Millitary' },
  //     ];
  //     break;
  //   default:
  // }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export default Calendar