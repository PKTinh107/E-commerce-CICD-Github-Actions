import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  menFashionMenuItems,
  otherSectionsMenuItems,
  womenFashionMenuItems,
} from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import DropDownMenu from "./DropDownMenu";
import OtherSections from "./OtherSections";
import s from "./SectionsMenu.module.scss";
import SectionsMenuButton from "./SectionsMenuButton";
import enTranslation from '../../../../../public/locale/en/translation.json';

const SectionsMenu = () => {
  const { t } = useTranslation();
  const { isSectionsMenuActive } = useSelector((state) => state.global);
  const activeClass = isSectionsMenuActive ? s.active : "";

  return (
    <>
      <SectionsMenuButton />

      <nav className={`${s.sectionsMenu} ${activeClass}`}>
        <DropDownMenu nameMenu={enTranslation.sectionsMenu.womenFashion.title}>
          <ul className={s.dropDownMenu}>
            {womenFashionMenuItems.map((item, index) => {
              const itemName = camelCase(item.name);
              const itemTrans = enTranslation.sectionsMenu.womenFashion.menuItems[itemName];

              return (
                <li key={`item-${index}`}>
                  <a href={item.url}>{itemTrans}</a>
                </li>
              );
            })}
          </ul>
        </DropDownMenu>

        <DropDownMenu nameMenu={enTranslation.sectionsMenu.menFashion.title}>
          <ul className={s.dropDownMenu}>
            {menFashionMenuItems.map((item, index) => {
              const itemName = camelCase(item.name);
              const itemTrans = enTranslation.sectionsMenu.menFashion.menuItems[itemName];
              return (
                <li key={`item-${index}`}>
                  <a href={item.url}>{itemTrans}</a>
                </li>
              );
            })}
          </ul>
        </DropDownMenu>

        <OtherSections data={otherSectionsMenuItems} />
      </nav>
    </>
  );
};

export default SectionsMenu;
