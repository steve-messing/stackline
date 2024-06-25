import StacklineSVG from "../assets/stackline_logo.svg";
import "../styles.css"

export const Header = () => {
  return (
    <div className="header">
      <img src={StacklineSVG} height="40px" alt="Stackline Logo" />
    </div>
  );
};
