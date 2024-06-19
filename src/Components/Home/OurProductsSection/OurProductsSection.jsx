import { Link } from "react-router-dom";
import { productCardCustomizations } from "src/Data/staticData";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import ExploreProducts from "../ProductPoster/ExploreProducts";
import s from "./OurProductsSection.module.scss";
import enTranslation from '../../../../public/locale/en/translation.json';

const OurProductsSection = () => {
  const ourProducts = "sectionTitles.ourProducts";

  // Kiểm tra và log enTranslation và ourProducts để debug
  console.log(enTranslation);
  console.log(enTranslation[ourProducts]);

  // Kiểm tra và gán giá trị mặc định nếu enTranslation[ourProducts] không tồn tại
  const title = enTranslation[ourProducts] ? enTranslation[ourProducts].title : "Default Title";
  const exploreProducts = enTranslation[ourProducts] ? enTranslation[ourProducts].exploreProducts : "Explore Products";

  return (
    <section className={s.ourProductsSection}>
      <div className={s.wrapper}>
        <SectionTitle
          eventName={title}
          sectionName={exploreProducts}
        />
      </div>

      <ExploreProducts
        numOfProducts={7}
        customization={productCardCustomizations.ourProducts}
      />

      <Link to="/products" className={s.viewProductsBtn}>
        {enTranslation.buttons.viewAllProducts}
      </Link>
    </section>
  );
};

export default OurProductsSection;
