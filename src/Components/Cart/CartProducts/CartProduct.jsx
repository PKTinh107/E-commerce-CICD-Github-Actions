import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CustomNumberInput from "../../Shared/MiniComponents/CustomNumberInput/CustomNumberInput";
import s from "./CartProduct.module.scss";
import RemoveCartProductBtn from "./RemoveCartProductBtn";
import enTranslation from '../../../../public/locale/en/translation.json';

const CartProduct = ({ data }) => {
  const { img, name, shortName, afterDiscount, quantity, id } = data;
  const priceAfterDiscount = afterDiscount.replaceAll(",", "");
  const subTotal = (quantity * priceAfterDiscount).toFixed(2);
  const { t } = useTranslation();

  const translatedProductName = translateProduct({
    productName: shortName,
    translateMethod: t,
    translateKey: "shortName",
  });

  const productInfo = enTranslation.products[shortName];
  console.log(productInfo)
  

  return (
    <tr className={s.productContainer}>
      <td className={s.product}>
        <div className={s.imgHolder}>
          <img src={img} alt={shortName} />
          <RemoveCartProductBtn productId={id} />
        </div>

        <Link to={`/details?product=${name}`}>{translatedProductName}</Link>
      </td>

      <td className={s.price}>${afterDiscount}</td>

      <td>
        <CustomNumberInput product={data} quantity={quantity} />
      </td>

      <td>${subTotal}</td>
    </tr>
  );
};
export default CartProduct;

export function translateProduct({
  productName,
  translateMethod,
  translateKey,
  uppercase = false,
  dynamicData = {},
}) {
  const shortNameKey = productName?.replaceAll(" ", "");
  console.log(shortNameKey)
  const productTrans = enTranslation.products[shortNameKey];
  console.log(productTrans)
  
  const translateText = translateMethod(
    `${productTrans}.${translateKey}`,
    dynamicData
  );
  return uppercase ? translateText.toUpperCase() : translateText;
}
