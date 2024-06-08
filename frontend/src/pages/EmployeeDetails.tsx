// styles
import "./EmployeeDetails.css";

// imports
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";

// hooks
import { useFetch } from "../hooks/useFetch";

// components
import Dashboard from "../components/Dashboard";

export default function EmployeeDetails() {
  const { id } = useParams();
  const { data, isLoading } = useFetch();
  const navigate = useNavigate();
  useEffect(() => {
    // @ts-ignore
    if (parseInt(id) > 3) {
      navigate("/notFound");
    }
  }, [data, navigate, id]);

  return (
    <section className="employee-detail-container">
      {isLoading && <div className="loader"></div>}
      {data && (
        <div className="container">
          <Link to={"/"}>Go back</Link>
          <h1>
            {/*  @ts-ignore */}
            Currently viewing {data[parseInt(id)].name}'s daily activity for
            this week.
          </h1>
          {/*  @ts-ignore */}
          <Dashboard data={data[parseInt(id)]} />
        </div>
      )}
    </section>
  );
}
