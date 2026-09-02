//============================================================
// Component
//============================================================
export default function GradientOverlayImage_Project() {
  //==========================================================
  // Styles
  //==========================================================

  // Gradient Overlay
  const gradientOverlayStyle = `
    absolute
    inset-0
    bg-gradient-to-t
    from-card
    via-card/50
    to-white/25
    group-hover:to-transparent
    opacity-80
  `;

  //==========================================================
  // Render
  //==========================================================
  return <div className={gradientOverlayStyle} />;
}
