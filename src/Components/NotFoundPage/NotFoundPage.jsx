import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { UN_BUILT_PAGES } from "src/Data/globalVariables";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./NotFoundPage.module.scss";
import enTranslation from '../../../public/locale/en/translation.json';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pageName = location.pathname.replace("/", "");
  const isPageNotReady = UN_BUILT_PAGES.includes(pageName);
  const tabTitleText = isPageNotReady
    ? enTranslation.notFoundPage.notBuiltTabTitle
    : enTranslation.notFoundPage.tabTitle;
  const descriptionText = isPageNotReady
    ? enTranslation.notFoundPage.notBuiltDescription
    : enTranslation.notFoundPage.description;
  const notFoundMessage = enTranslation.notFoundPage.tabTitle;
  const backToHomeText = enTranslation.buttons.backToHome;
  const historyText = enTranslation.history.a404Error;

  return (
    <>
      <Helmet>
        <title>{tabTitleText}</title>
        <meta
          name="description"
          content="Oops! The page you're looking for on Exclusive couldn't be found. Return to our homepage to continue browsing our wide selection of products."
        />
      </Helmet>

      <div className="container">
        <main className={s.notFoundPage}>
          <PagesHistory history={["/", historyText]} />

          <div className={s.wrapper} id="notfound-page">
            <b>{notFoundMessage}</b>
            <p>{descriptionText}</p>
            <Link to="/">{backToHomeText}</Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFoundPage;
