import { useTranslation } from "react-i18next";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import s from "./CategoriesSection.module.scss";
import CategoriesSlider from "./CategoriesSlider";
import enTranslation from '../../../../public/locale/en/translation.json';

const CategoriesSection = () => {
  const { t } = useTranslation();
  const categoriesSection = enTranslation.sectionTitles.categoriesSection;

  return (
    <section className={s.categoriesSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName={categoriesSection.title}
          sectionName={categoriesSection.browseByCategory}
        />
      </div>

      <CategoriesSlider />
    </section>
  );
};
export default CategoriesSection;
