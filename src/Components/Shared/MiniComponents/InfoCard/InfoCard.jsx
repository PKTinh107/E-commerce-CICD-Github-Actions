import { useTranslation } from "react-i18next";
import SvgIcon from "../SvgIcon";
import s from "./InfoCard.module.scss";
import enTranslation from '../../../../../public/locale/en/translation.json';

const InfoCard = ({ data, index }) => {
  const { iconName, number } = data;
  const { t } = useTranslation();

  const translationKey = `aboutCardsInfo${index + 1}`;
  console.log(translationKey)
  const cardInfo = enTranslation.aboutPage.cardInfo[translationKey];

  console.log(cardInfo)

  return (
    <div className={s.card} tabIndex="0">
      <div className={s.iconHolder}>
        <SvgIcon name={iconName} />
      </div>

      <b>{number}</b>
      <p>{cardInfo}</p>
    </div>
  );
};
export default InfoCard;
