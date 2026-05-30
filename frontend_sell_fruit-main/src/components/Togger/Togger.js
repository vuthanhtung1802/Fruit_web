import styles from "./Togger.module.css";
import classNames from "classnames/bind";
import { BsTelephoneFill } from "react-icons/bs";

function Togger() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("togger_wrapper")}>
      <a href="https://www.facebook.com/HalonaPlazaZuni">Chat Facebook</a>
    </div>
  );
}

export default Togger;
