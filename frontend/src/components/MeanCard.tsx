// images
import Increase from "../assets/increase.png";

// @ts-ignore
export default function MeanCard({ data, cardImg }) {
  return (
    <div className="card">
      <>
        <div className="item-value">
          <small>Mean {data.label}</small>
          <strong>{(data.value / 7).toFixed(2)}</strong>
        </div>
        <div className="card-img">
          <img src={cardImg} alt="" />
        </div>
        <small>
          <span>12%</span>
          <img src={Increase} alt="" />
          from last week
        </small>
      </>
    </div>
  );
}
