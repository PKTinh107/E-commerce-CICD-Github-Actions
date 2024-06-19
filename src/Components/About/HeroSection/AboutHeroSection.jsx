import { useTranslation } from "react-i18next";
import { womenShopping } from "src/Assets/Images/Images";
import s from "./AboutHeroSection.module.scss";
import enTranslation from '../../../../public/locale/en/translation.json';

const AboutHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className={s.heroSection}>
      <section className={s.content}>
        <h2>{enTranslation.aboutPage.heroSection.heading}</h2>

        <p>{enTranslation.aboutPage.heroSection.paragraphOne}</p>
        <p>{enTranslation.aboutPage.heroSection.paragraphTwo}</p>
      </section>

      <div className={s.imgHolder}>
        <img src={womenShopping} alt={enTranslation.aboutPage.heroSection.imageAlt} />
      </div>
    </section>
  );
};

export default AboutHeroSection;
