// imports
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container notfound">
      <h1>Oh no!</h1>
      <p>This page does not exist. </p>
      <Link to={"/"}>Go back to home</Link>
    </div>
  );
}
