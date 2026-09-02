// ============================================================
// React Hooks
// ============================================================
import { useEffect, useState } from "react";

// ============================================================
// Components Material UI
// ============================================================
import { Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

// ============================================================
// Component
// ============================================================
export default function IconScrollBar() {
  // ============================================================
  // State
  // ============================================================
  const [ScrollYValue, setScrollYValue] = useState(false);

  // ============================================================
  // Effects
  // ============================================================
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 500) {
        setScrollYValue(true);
      } else {
        setScrollYValue(false);
      }
    };
  }, [ScrollYValue]);

  // ============================================================
  // Styles
  // ============================================================
  const containerStyle = ScrollYValue
    ? `
      IconScrollBar
      fixed
      bottom-15
      right-6
    `
    : "hidden";

  const fabStyle = {
    boxShadow: "0px 1px 25px red",
  };

  // ============================================================
  // Render
  // ============================================================
  return (
    <>
      {/* ======================================================
          Start Component IconScrollBar UI
      ====================================================== */}
      <div className={containerStyle} onClick={() => window.scrollTo(0, 0)}>
        <Fab variant="circular" size="small" color="error" style={fabStyle}>
          <NavigationIcon />
        </Fab>
      </div>

      {/* ======================================================
          End Component IconScrollBar UI
      ====================================================== */}
    </>
  );
}
