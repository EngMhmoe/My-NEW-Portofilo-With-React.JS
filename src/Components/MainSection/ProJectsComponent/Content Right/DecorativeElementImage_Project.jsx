//============================================================
// Component
//============================================================
export default function DecorativeElementImage_Project() {
  //==========================================================
  // Styles
  //==========================================================

  // Decorative Element
  const decorativeElementStyle = `
    absolute
    top-0
    left-0
    right-0
    h-0.5
    bg-gradient-to-r
    from-red-300/10
    via-red-900
    to-red-300/10
  `;

  //==========================================================
  // Render
  //==========================================================
  return <div className={decorativeElementStyle} />;
}
