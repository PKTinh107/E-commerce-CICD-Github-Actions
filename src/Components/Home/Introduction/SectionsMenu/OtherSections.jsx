import { useTranslation } from "react-i18next";
import { camelCase } from "src/Functions/helper";
import enTranslation from '../../../../../public/locale/en/translation.json';

const OtherSections = ({ data }) => {
  const { t } = useTranslation();

  return data.map((item, index) => {
    const itemName = camelCase(item.name);
    const itemTrans = enTranslation.sectionsMenu.otherSections[itemName];

    return (
      <a href={item.url} key={`item-${index}`}>
        {itemTrans}
      </a>
    );
  });
};
export default OtherSections;
