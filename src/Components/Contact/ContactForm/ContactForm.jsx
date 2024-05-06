import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    resetForm(e);
    showSentMsgAlert();
  }

  function resetForm(e) {
    const resetButton = e.target.querySelector("button[type=reset]");
    resetButton?.click();
    setPhone("");
  }

  function showSentMsgAlert() {
    setTimeout(() => {
      dispatch(
        showAlert({
          alertText:
            "Thank you for your message!, we will get back to you shortly",
          alertState: "success",
        })
      );
    }, 1200);
  }

  function handleMobileOnChange(e) {
    const pressedKey = e.nativeEvent.data;
    const isNumber = !isNaN(parseInt(pressedKey));
    if (isNumber || pressedKey === null) setPhone(e.target.value);
  }

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <div className={s.wrapper}>
          <div className={s.input}>
            <label htmlFor="username" aria-label="Username field placeholder">
              {t("inputsPlaceholders.yourName")}
            </label>
            <input
              type="text"
              placeholder=""
              autoComplete="off"
              name="username"
              id="username"
              required
            />
          </div>

          <div className={s.input}>
            <label htmlFor="email" aria-label="Email field placeholder">
              {t("inputsPlaceholders.yourEmail")}
            </label>
            <input
              type="email"
              placeholder=""
              autoComplete="off"
              name="email"
              id="email"
              required
            />
          </div>

          <div className={s.input}>
            <label htmlFor="phone" aria-label="Phone number field placeholder">
              {t("inputsPlaceholders.yourPhone")}
            </label>
            <input
              type="tel"
              autoComplete="off"
              placeholder=""
              name="phone"
              id="phone"
              required
              onChange={handleMobileOnChange}
              value={phone}
            />
          </div>
        </div>

        <textarea
          name="message"
          autoComplete="off"
          placeholder={t("inputsPlaceholders.yourMessage")}
          aria-label="User message field"
          required
        />
      </div>

      <div className={s.buttons}>
        <button type="reset">{t("common.reset")}</button>
        <button type="submit">{t("buttons.sendMessage")}</button>
      </div>
    </form>
  );
};
export default ContactForm;
