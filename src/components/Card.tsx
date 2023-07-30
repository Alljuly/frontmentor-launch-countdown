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
        <div className="component">
          <span>{timer.days}</span>
        </div>
        <p className="typeTime">days</p>
      </div>
      <div className="card">
        <div className="component">
          <span>{timer.hours}</span>{" "}
        </div>
        <p className="typeTime"> hours</p>
      </div>
      <div className="card">
        <div className="component">
          <span>{timer.minuts}</span>{" "}
        </div>
        <p className="typeTime">minuts</p>
      </div>
      <div className="card">
        <div className="component">
          {" "}
          <span>{timer.seconds}</span>
        </div>
        <p className="typeTime">seconds</p>
      </div>
    </div>
  );
}

export default Card;
