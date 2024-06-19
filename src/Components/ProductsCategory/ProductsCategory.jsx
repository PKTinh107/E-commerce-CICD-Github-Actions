import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productsData } from "src/Data/productsData";
import ProductCard from "../Shared/ProductsCards/ProductCard/ProductCard";
import s from "./ProductsCategory.module.scss";
import enTranslation from '../../../public/locale/en/translation.json';

const ProductsCategory = ({ categoryName, customization }) => {
  const { t } = useTranslation();
  const categoryProducts = productsData.filter(
    (product) => product.category === categoryName
  );
  const hasNoProducts = categoryProducts.length === 0;

  if (hasNoProducts)
    return (
      <div className={s.notFoundMessage}>
        <p>{enTranslation.common.weDontHaveProducts}</p>
        <p>
          {enTranslation.common.backTo} <Link to="/">{enTranslation.common.home}</Link>
        </p>
      </div>
    );

  return (
    <div className={s.products}>
      {categoryProducts?.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          customization={customization}
        />
      ))}
    </div>
  );
};
export default ProductsCategory;
