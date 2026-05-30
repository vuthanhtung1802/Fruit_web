import styles from "./FormContact.module.css";
import classNames from "classnames/bind";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axiosInstance from "~/axios/axiosConfig";

function FormContact() {
  let cx = classNames.bind(styles);

  const [customer, setCustomer] = useState({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const handleChangeInput = (value, key) => {
    setCustomer(pre => {
      return { ...pre, [key]: value };
    });
  };

  const notify = (type, message) =>
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSendEmailContact = async e => {
    e.preventDefault();
    axiosInstance
      .get("email/sendEmail", { params: customer })
      .then(data => {
        notify("success", "Send contact is success");
      })
      .catch(err => {
        notify("error", "Send contact is faulire");
      });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form
        className={cx("section-bottom-home_contact_container")}
        onSubmit={handleSendEmailContact}
      >
        <h1 className={cx("section-bottom-home_contact_title")}>
          Liên hệ tư vấn mua hàng
        </h1>
        <input
          type="text"
          name="yourname"
          placeholder="Họ tên của bạn..."
          value={customer.name}
          className={cx("section-bottom-home_contact_input")}
          onChange={e => {
            handleChangeInput(e.target.value, "name");
          }}
        ></input>
        <input
          type="tel"
          name="yourphone"
          placeholder="Số điện thoại..."
          value={customer.phoneNumber}
          className={cx("section-bottom-home_contact_input")}
          onChange={e => {
            handleChangeInput(e.target.value, "phoneNumber");
          }}
        ></input>
        <textarea
          id="yourrequest"
          rows="5"
          name="yourrequest"
          placeholder="Nội dung cần tư vấn..."
          value={customer.message}
          className={cx("section-bottom-home_contact_input")}
          onChange={e => {
            handleChangeInput(e.target.value, "message");
          }}
        ></textarea>
        <button type="submit" className={cx("section-bottom-home_contact_btn")}>
          Gửi liên hệ
        </button>
      </form>
    </div>
  );
}

export default FormContact;
