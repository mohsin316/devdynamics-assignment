import { Outlet } from "react-router-dom";
// import LogoDark from "../assets/logoDark.svg";
import LogoLight from "../assets/logoLight.svg";
import Darkmode from "../assets/Darkmode.svg";
// import Lightmode from "../assets/Lightmode.svg";
import "./RootLayout.css";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div>
              <img src={LogoLight} alt="Logo" />
            </div>
            <button>
              <img src={Darkmode} alt="lightmode toggle" />
            </button>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
