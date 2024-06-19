import { useTranslation } from "react-i18next";
import { featuresSectionData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import Feature from "../../Shared/MiniComponents/Feature/Feature";
import s from "./FeaturedSectionFeatures.module.scss";
import enTranslation from '../../../../public/locale/en/translation.json';

const FeaturedSectionFeatures = () => {
  const featureSection = enTranslation.aboutPage.featuresSectionData;
  console.log(featureSection)
  const { t } = useTranslation();

  return (
    <div className={s.features}>
      {featuresSectionData.map(({ iconImg, iconAlt, id }) => {
        const featuresTransData = `${featureSection}.${camelCase(iconAlt)}`;
        const iconAltTrans = `${featuresTransData}`.iconAlt;
        const titleTrans = `${featuresTransData}`.title;
        const descriptionTrans = `${featuresTransData}`.description;

        return (
          <Feature
            iconImg={iconImg}
            iconAlt={iconAltTrans}
            title={titleTrans}
            description={descriptionTrans}
            key={id}
          />
        );
      })}
    </div>
  );
};
export default FeaturedSectionFeatures;
