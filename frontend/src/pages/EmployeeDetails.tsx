import { useNavigate, useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import "./EmployeeDetails.css";

export default function EmployeeDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch();
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    if (parseInt(id) >= 3) {
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
            Currently viewing {data[parseInt(id)].name}'s daily activity for
            this week.
          </h1>
          <Dashboard data={data[parseInt(id)]} />
        </div>
      )}
    </section>
  );
}
