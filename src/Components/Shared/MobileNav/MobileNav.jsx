import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userImg, userPicturePlaceholder } from "src/Assets/Images/Images";
import { mobileNavData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import useSignOut from "src/Hooks/App/useSignOut";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./MobileNav.module.scss";
import enTranslation from '../../../../public/locale/en/translation.json';

const MobileNav = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { loginInfo } = useSelector((state) => state.user);
  const { username, isSignIn } = loginInfo;
  const handleSignOut = useSignOut();
  const { t } = useTranslation();

  return (
    <div className={`${s.mobileMenu} ${isMobileMenuActive ? s.active : ""}`}>
      <div className={s.userInfo}>
        <Link to="/profile" title={enTranslation.mobileNav.profile} className={s.img}>
          <img
            src={isSignIn ? userImg : userPicturePlaceholder}
            alt="user's picture"
            loading="lazy"
            decoding="async"
          />
        </Link>

        <p>
          {enTranslation.mobileNav.hey} 🖐️
          <Link
            to="/profile"
            title={enTranslation.mobileNav.profile}
            className={s.userName}
          >
            {username}
          </Link>
        </p>
      </div>

      <nav className={s.navLinks}>
        <ul>
          {mobileNavData.map(({ name, link, icon, requiteSignIn }, index) => {
            const shouldShow = requiteSignIn ? isSignIn : true;
            const currentPage =
              window.location.pathname === link ? "page" : undefined;

            if (!shouldShow) return null;

            return (
              <li key={"mobile-nav-link-" + index}>
                <NavLink to={link} aria-current={currentPage}>
                  <SvgIcon name={icon} />
                  <span>{`enTranslation.mobileNav.${camelCase(name)}`}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <hr className={s.line}></hr>

      {isSignIn && (
        <button
          className={s.signOutButton}
          type="button"
          onClick={handleSignOut}
        >
          <SvgIcon name="boxArrowRight" />
          <span>{enTranslation.mobileNav.signOut}</span>
        </button>
      )}

      {!isSignIn && (
        <Link to="/signup" className={s.signOutButton}>
          <SvgIcon name="boxArrowRight" />
          <span>{enTranslation.cashOnDeliverymobileNav.signIn}</span>
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
