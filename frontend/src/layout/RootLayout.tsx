// styles
import "./RootLayout.css";

// images
import LogoLight from "../assets/logoLight.svg";
import Home from "../assets/home.svg";

// imports
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div>
              <img src={LogoLight} alt="Logo" />
            </div>
            <Link to={"/"}>
              <img src={Home} alt="lightmode toggle" />
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
