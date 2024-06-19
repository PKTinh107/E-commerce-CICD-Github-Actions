// src/Components/MemberCard/MemberCard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { camelCase } from 'src/Functions/helper';
import s from './MemberCard.module.scss';
import SocialMedia from './memberCardComponents/SocialMedia';
import enTranslation from '../../../../../public/locale/en/translation.json';

const MemberCard = ({ data }) => {
  const { t } = useTranslation();
  const { name, jobTitle, img, socialMedia } = data;
  const memberDataKey = `aboutPage.ourMembersData.${camelCase(jobTitle)}`;

  // Function to access nested objects based on dot-separated key
  const getObjectValue = (object, key) => {
    return key.split('.').reduce((obj, currentKey) => {
      if (obj) {
        return obj[currentKey];
      }
      return undefined;
    }, object);
  };

  // Accessing member data from enTranslation
  const memberData = getObjectValue(enTranslation, memberDataKey);

  if (!memberData) {
    return null; // Handle case where member data is not found
  }

  return (
    <div className={s.card}>
      <div className={s.imgHolder}>
        <img src={img} alt={name} loading="lazy" decoding="async" />
      </div>

      <div className={s.info}>
        <b>{memberData.name}</b>
        <p>{memberData.jobTitle}</p>

        <SocialMedia socialMedia={socialMedia} />
      </div>
    </div>
  );
};

export default MemberCard;
