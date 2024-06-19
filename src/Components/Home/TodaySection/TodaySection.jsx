import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productsData } from "src/Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import EventCounter from "./EventCounter";
import s from "./TodaySection.module.scss";
import enTranslation from '../../../../public/locale/en/translation.json';

const TodaySection = () => {
  const todaysSection = enTranslation.sectionTitles.todaysSection;
  const { t } = useTranslation();

  return (
    <section className={s.todaysSection} id="todays-section">
      <div className={s.wrapper}>
        <SectionTitle
          eventName={todaysSection.title}
          sectionName={todaysSection.flashSales}
        />
        <EventCounter eventName="flash-sales" timeEvent="3 23 19 56" />
      </div>

      <ProductsSlider filterFun={filterFlashSalesProducts} />

      <Link to="/products" className={s.viewProductsBtn}>
        {enTranslation.buttons.viewAllProducts}
      </Link>
    </section>
  );
};
export default TodaySection;

function filterFlashSalesProducts() {
  return productsData.filter((productData) => productData.sold > 100);
}
