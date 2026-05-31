import styles from "./Item.module.css";
import classNames from "classnames/bind";
import { PathRoutes } from "~/routes/PathRoutes";
import { Link } from "react-router-dom";
import handleNumberPrice from "~/util/handleNumberPrice";

function Item({
  linkPicture,
  nameItem,
  priceOld = 0,
  priceItem = 0,
  sale,
  idItem,
}) {
  let cx = classNames.bind(styles);
  return (
    <Link
      to={`${PathRoutes.products}/${idItem}`}
      className={cx("present-products_container")}
    >
      <img
        src={linkPicture}
        alt={nameItem}
        className={cx("present-products_img")}
      ></img>
      <div className={cx("present-products_name")}>{nameItem}</div>
      <div className={cx("present-products_price")}>
        {sale > 0 && (
          <span className={cx("present-products_old-price")}>
            {handleNumberPrice(priceOld)}
            <strong>đ</strong>
          </span>
        )}
        <span
          className={cx("present-products_new-price", {
            "present-products_new-price_no-margin": !(sale > 0),
          })}
        >
          {handleNumberPrice(priceItem)}
          <strong>đ</strong>
        </span>
      </div>
      <div className={cx("present-products_wrapper-button")}>
        <span className={cx("present-products_button")}>Mua ngay</span>
      </div>
      {sale > 0 && (
        <div className={cx("present-products-sale")}>
          <span>{`-${sale}%`}</span>
        </div>
      )}
    </Link>
  );
}

export default Item;
