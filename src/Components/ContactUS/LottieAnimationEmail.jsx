//============================================================
// Animation
//============================================================
import Lottie from "lottie-react";
import ContactAnimation from "/public/Animations/IMGContactUS/Contact us.json";

//============================================================
// Component
//============================================================
export default function LottieAnimationEmail() {
  //==========================================================
  // Styles
  //==========================================================
  const animationStyle = `
    img
    xl:w-[360px]
    lg:w-[300px]
    md:w-[280px]
    lg:justify-self-center
    justify-self-end
    ms-auto
  `;

  //==========================================================
  // Render
  //==========================================================
  return <Lottie className={animationStyle} animationData={ContactAnimation} />;
}
