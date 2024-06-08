// import styles
import "./Card.css";

type cardType = {
  value: string;
  label: string;
  percentage: number;
  increase: boolean | null;
};
import Increase from "../assets/increase.png";
import Decrease from "../assets/decrease.png";

export default function Card({
  // @ts-ignore
  data,
  // @ts-ignore
  cardImg,
  daily,
}: {
  data: cardType;
  card: any;
  daily: boolean;
}) {
  return (
    <div className="card">
      <>
        <div className="item-value">
          <small>{data.label.toUpperCase()}</small>
          <strong>{data.value}</strong>
        </div>
        <div className="card-img">
          <img src={cardImg} alt="" />
        </div>
        {data.increase === null && <small>No work done yesterday</small>}
        {data.increase !== null && (
          <small>
            <span>{Math.abs(Math.floor(data.percentage * 100))}%</span>
            <img src={data.increase ? Increase : Decrease} alt="" />
            from {daily ? "yesterday" : "last week"}
          </small>
        )}
      </>
    </div>
  );
}
