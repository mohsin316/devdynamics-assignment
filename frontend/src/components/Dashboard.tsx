import { employeeData } from "../vite-env";
import "./Dasboard.css";
import { calculateDailyAmount } from "../calculations/daily";

import Card from "./Card";
import { calculateWeeklyAmount } from "../calculations/Weekly";
import { useEffect, useState } from "react";

import Commit from "../assets/commit.png";
import Documentation from "../assets/documentaion.png";
import Bug from "../assets/bug.png";

import IncidentAlert from "../assets/incidentAlert.png";
import IncidentResolved from "../assets/incidentResolved.png";
import Prclosed from "../assets/prClosed.png";
import Prcomment from "../assets/prComment.png";
import Prmerge from "../assets/prMerge.png";
import PrOpen from "../assets/prOpen.png";
import Meeting from "../assets/meeting.png";
import Chart from "./Chart";
import IncidentPieChart from "./IncidentPieChart";
import ActiveChart from "./ActiveChart";
import MeanCard from "./MeanCard";

type dayData = {
  date: string;
  commits: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  prOpen: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  prMerged: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  prReviewed: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  prComment: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  incidentAlerts: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  incidentResolved: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  meetings: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  bugFixes: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
  documentation: {
    value: string;
    label: string;
    percentage: number;
    increase: boolean | null;
  };
}[];

export default function Dashboard({ data }: { data: employeeData }) {
  const dailyData: dayData = calculateDailyAmount(data);
  const weeklyData: dayData = calculateWeeklyAmount(data);

  const [isDaily, setIsDaily] = useState(true);
  const [count, setCount] = useState(0);

  const formatDate = (d: string) => {
    const date = new Date(d);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return `${days[date.getDay()]}, ${date.getDate()} May`;
  };

  return (
    <div className="dashboard-container">
      <div className="date-toggle">
        <div className="switching-container">
          <button
            disabled={count === 0}
            onClick={() => setCount((prev) => prev - 1)}
          >
            &lt;
          </button>
          <strong>
            {isDaily
              ? formatDate(dailyData[count].date)
              : formatDate(weeklyData[count].date)}
          </strong>
          <button
            disabled={count === 6 || !isDaily}
            onClick={() => setCount((prev) => prev + 1)}
          >
            &gt;
          </button>
        </div>
        <div className="frequency-toggle">
          <button
            onClick={() => {
              if (isDaily) {
                setIsDaily(false);
                setCount(0);
              } else {
                setIsDaily(true);
              }
            }}
            className="toggle-label"
          >
            Daily
          </button>
          <button
            className={`toggle-btn ${isDaily ? "" : "toggled"}`}
            onClick={() => {
              if (isDaily) {
                setIsDaily(false);
                setCount(0);
              } else {
                setIsDaily(true);
              }
            }}
          >
            <div className="thumb"></div>
          </button>
          <button
            onClick={() => {
              if (isDaily) {
                setIsDaily(false);
                setCount(0);
              } else {
                setIsDaily(true);
              }
            }}
            className="toggle-label"
          >
            Weekly
          </button>
        </div>
      </div>
      <div className="dashboard">
        <div className="initial-data">
          <Card
            daily={isDaily}
            data={
              isDaily ? dailyData[count].commits : weeklyData[count].commits
            }
            cardImg={Commit}
          />
          <Card
            daily={isDaily}
            data={
              isDaily
                ? dailyData[count].documentation
                : weeklyData[count].documentation
            }
            cardImg={Documentation}
          />
          <Card
            daily={isDaily}
            data={
              isDaily ? dailyData[count].bugFixes : weeklyData[count].bugFixes
            }
            cardImg={Bug}
          />
          <Card
            daily={isDaily}
            data={
              isDaily ? dailyData[count].meetings : weeklyData[count].meetings
            }
            cardImg={Meeting}
          />
        </div>
        <div className="main-data">
          <div className="one">
            {dailyData && <Chart chartData={dailyData} />}
            <Card
              daily={isDaily}
              data={
                isDaily ? dailyData[count].prOpen : weeklyData[count].prOpen
              }
              cardImg={PrOpen}
            />
            <Card
              daily={isDaily}
              data={
                isDaily
                  ? dailyData[count].prReviewed
                  : weeklyData[count].prReviewed
              }
              cardImg={Prclosed}
            />
            <Card
              daily={isDaily}
              data={
                isDaily ? dailyData[count].prMerged : weeklyData[count].prMerged
              }
              cardImg={Prmerge}
            />
            <Card
              daily={isDaily}
              data={
                isDaily
                  ? dailyData[count].prComment
                  : weeklyData[count].prComment
              }
              cardImg={Prcomment}
            />
          </div>
          <div className="two">
            <MeanCard data={weeklyData[0].prOpen} cardImg={PrOpen} />
            <MeanCard data={weeklyData[0].prReviewed} cardImg={Prclosed} />
            <ActiveChart activeDays={data.activeDays.days} />
          </div>
          <div className="three">
            <IncidentPieChart
              incidentAlerts={weeklyData[0].incidentAlerts.value}
              incidentResolved={weeklyData[0].incidentAlerts.value}
            />
            <Card
              daily={isDaily}
              data={
                isDaily
                  ? dailyData[count].incidentAlerts
                  : weeklyData[count].incidentAlerts
              }
              cardImg={IncidentAlert}
            />
            <Card
              data={
                isDaily
                  ? dailyData[count].incidentResolved
                  : weeklyData[count].incidentResolved
              }
              cardImg={IncidentResolved}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
