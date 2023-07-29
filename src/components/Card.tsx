function Card(props: Array<number>) {
  const d = new Date("August 18, 2023 03:24:00");

  const timeGap = d.getTime() - props.timer;

  console.log(timeGap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const timer = {
    days: Math.floor(timeGap / day),
    hours: Math.floor((timeGap % day) / hour),
    minuts: Math.floor((timeGap % hour) / minute),
    seconds: Math.floor((timeGap % minute) / second),
  };

  return (
    <div className="countTimer">
      <div className="card">
        <div className="component">{timer.days}</div>
        <div className="typeTime">days</div>
      </div>
      <div className="card">
        <div className="component"> {timer.hours} </div>
        <div className="typeTime">hours</div>
      </div>
      <div className="card">
        <div className="component"> {timer.minuts} </div>
        <div className="typeTime">minuts</div>
      </div>
      <div className="card">
        <div className="component"> {timer.seconds}</div>
        <div className="typeTime">seconds</div>
      </div>
    </div>
  );
}

export default Card;
