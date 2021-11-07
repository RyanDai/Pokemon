import "../styles/PageSwitch.scss";
import { Link } from "react-router-dom";

function PageSwitch(props) {
  return (
    <div className="switchContainer">
      <div className="switchText">
        {props.page === "Dex" ? (
          <Link to="/" className="link">
            {props.page}
          </Link>
        ) : (
          <Link to="/party" className="link">
            {props.page}
          </Link>
        )}
      </div>
    </div>
  );
}

export default PageSwitch;
