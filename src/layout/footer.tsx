import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const linkedIn = "https://www.linkedin.com/in/sergei-timokhin-ste/";
  const youtube = "https://youtube.com/@_qaroom?si=MDIC7UxW8mILAAkC";
  const gitHub = "https://github.com/b1gslick";
  const telegram = "https://t.me/qar00m";
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-icons">
          <ul>
            <li>
              <a href={linkedIn} target="_blank">
                <FontAwesomeIcon className="fa" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href={gitHub} target="_blank">
                <FontAwesomeIcon className="fa" icon={faGithub} />
              </a>
            </li>
            <li>
              <a href={youtube} target="_blank">
                <FontAwesomeIcon className="fa" icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href={telegram} target="_blank">
                <FontAwesomeIcon className="fa" icon={faTelegram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
