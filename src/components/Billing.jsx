import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily manage your <br className="sm:block hidden" /> success with our Carry Bags.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "हमारी कंपनी में, हम उन कैरी बैग को उपलब्ध कराते हैं जो अपेक्षाओं को पार करते हैं। हमारे ग्राहक हमारी बैग की टिकाऊता, कार्यक्षमता और स्टाइलिश डिज़ाइन की प्रशंसा करते हैं, जिससे ये बाजार में शीर्ष विकल्प बन जाते हैं। उनकी संतुष्टि हमारा सबसे बड़ा प्रशंसक है, जो हमें निरंतर नवाचार करने और सर्वोत्तम उत्पाद प्रदान करने के लिए प्रेरित करती है।"
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
    </div>
  </section>
);

export default Billing;
