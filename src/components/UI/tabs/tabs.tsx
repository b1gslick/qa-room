import { Link } from "react-router-dom";
import "./tabs.css";

export type tabsProps = {
  link: string;
  name: string;
  text: string;
};

export const Tab = (props: tabsProps) => {
  return (
    <Link to={props.link} className={`tab ${props.name}`}>
      {props.text}
    </Link>
  );
};
