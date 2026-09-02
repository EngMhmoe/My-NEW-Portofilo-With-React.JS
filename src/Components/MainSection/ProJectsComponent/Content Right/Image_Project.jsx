//============================================================
// Component
//============================================================
export default function Image_Project({ image, title }) {
  //==========================================================
  // Styles
  //==========================================================

  // Project Image
  const imageStyle = `
    w-full
    h-full
    transition-transform
    duration-1500
    group-hover:scale-110
  `;

  //==========================================================
  // Render
  //==========================================================
  return <img src={image} alt={title} className={imageStyle} />;
}
