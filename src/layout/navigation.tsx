import { Tab } from "../components/UI/tabs/tabs";
import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Tab {...{ link: "/", name: "nome_link", text: "Home" }} />
      <Tab {...{ link: "/about", name: "about_link", text: "About" }} />
      <Tab
        {...{ link: "/articles", name: "articles_link", text: "Articles" }}
      />
      <Tab {...{ link: "/Channel", name: "channel_link", text: "Channel" }} />
    </nav>
  );
};
