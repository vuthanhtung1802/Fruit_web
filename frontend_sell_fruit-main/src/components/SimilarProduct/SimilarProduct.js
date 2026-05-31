import styles from "./SimilarProduct.module.css";
import classNames from "classnames/bind";

import { useEffect, useState } from "react";

import Item from "~/components/Item";

import axiosInstance from "~/axios/axiosConfig";

function SimilarProduct({ typeItem, idItemCurren }) {
  let cx = classNames.bind(styles);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(
          `fruitItems/similarItems?typeItem=${typeItem}&idItemCurren=${idItemCurren}`
        );
        if (res) {
          setItems(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch similar products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idItemCurren]);

  return (
    <div className={cx("product_detail_container_section_3")}>
      <h1 className={cx("product_detail_container_section_3_title")}>
        Sản phẩm tương tự
      </h1>
      <div className={cx("product_detail_container_section_3_list_item")}>
        {loading ? (
          <div className={cx("similar_loading")}>Đang tải...</div>
        ) : items.length > 0 ? (
          items.map((item) => {
            return (
              <Item
                key={item._id}
                linkPicture={item.img}
                nameItem={item.name}
                priceOld={item.price}
                priceItem={item.realPrice}
                sale={item.sale}
                idItem={item._id}
              ></Item>
            );
          })
        ) : (
          <div className={cx("similar_empty")}>Không có sản phẩm tương tự</div>
        )}
      </div>
    </div>
  );
}

export default SimilarProduct;
