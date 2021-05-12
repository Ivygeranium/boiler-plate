import { Statistic, Row, Col } from 'antd';

const { Countdown } = Statistic;
const deadline = new Date('2025/01/03/09:00:00') // Moment is also OK
console.log(deadline);

function onFinish() {
  console.log('finished!');
}

function Timer(params) {
  return(
    <Row gutter={16}>
      <Col span={12}>
        <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      </Col>
      <Col span={12}>
        <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SS" />
      </Col>
      <Col span={24} style={{ marginTop: 32 }}>
        <Countdown title="Day Level" value={deadline} format="D 일 H 시 m 분 s 초" />
      </Col>
  </Row>
  )
}

export default Timer