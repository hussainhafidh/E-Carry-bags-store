import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better Carry Bag<br className="sm:block hidden" /> by visiting us.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "Our carry bags stand out in the market, endorsed by our delighted customers. Their satisfaction fuels our commitment to excellence, making us the preferred choice for quality and style."
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
