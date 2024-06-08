// styles
import "./Home.css";

// hooks
import { useFetch } from "../hooks/useFetch";

// components
import Grid from "../components/Grid";

export default function Home() {
  const { data, isLoading } = useFetch();

  return (
    <div className="container">
      <h1>
        Hello, Admin! <br /> Today is Sunday 19th May.
      </h1>
      <p>
        Select an employee below to know their daily activity report for the
        week.
      </p>
      {isLoading && <div className="loader">dhdtrh</div>}
      {data && <Grid data={data} />}
    </div>
  );
}
