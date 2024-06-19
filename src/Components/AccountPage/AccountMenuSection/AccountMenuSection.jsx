import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import AccountMenuIcon from "./AccountMenuIcon";
import s from "./AccountMenuSection.module.scss";
import enTranslation from '../../../../public/locale/en/translation.json';

const AccountMenuSection = () => {
  const { isProfileMenuActive } = useSelector((state) => state.global);
  const { windowWidth } = useGetResizeWindow();
  const isMobileDevice = windowWidth < SCREEN_SIZES.tablet;
  const mobileClass = isMobileDevice ? s.mobile : "";
  const activeClass = isProfileMenuActive ? s.active : "";
  const accountMenu = "accountPage.accountMenuSection";

  return (
    <>
      <AccountMenuIcon />

      <nav
        className={`${s.menuSection} ${mobileClass} ${activeClass}`}
        aria-label={"Account navigation"}
      >
        <section className={s.section}>
          <h2>{enTranslation[`${accountMenu}`].manageMyAccount}</h2>

          <ul>
            <li>
              <NavLink to="/profile">{enTranslation[`${accountMenu}`].profile}</NavLink>
            </li>

            <li>
              <a href="#">{enTranslation[`${accountMenu}`].addressBook}</a>
            </li>

            <li>
              <a href="#">{enTranslation[`${accountMenu}`].paymentOptions}</a>
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>{enTranslation[`${accountMenu}`].myOrders}</h2>

          <ul>
            <li>
              <a href="#">{enTranslation[`${accountMenu}`].myOrders}</a>
            </li>

            <li>
              <a href="#">{enTranslation[`${accountMenu}`].returns}</a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default AccountMenuSection;
