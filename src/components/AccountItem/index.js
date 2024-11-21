import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?lk3s=a5d48078&nonce=55494&refresh_token=4dae8ba11a6f43750a85a88713a6f80b&x-expires=1732262400&x-signature=yX0eRO0NkpjTa9YnKrlI%2Bnc9gd8%3D&shp=a5d48078&shcp=c1333099"
        alt=""
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
};

export default AccountItem;
