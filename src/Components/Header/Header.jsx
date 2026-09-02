//============================================================
// React
//============================================================
import { useContext } from "react";

//============================================================
// Styles
//============================================================
import "../../styles/header.css";

//============================================================
// Components
//============================================================
import LinksANDIconDarkMode from "./LinksANDIconDarkMode";
import IconMenuBar from "./IconMenuBar";

//============================================================
// Context
//============================================================
import Mohamed from "../../context/ContextDarkMode";

//============================================================
// Material UI
//============================================================
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode } = useContext(Mohamed);

  //==========================================================
  // Styles
  //==========================================================
  const toolbarClasses = `
    flex flex-row-reverse items-center justify-center
    ${darkMode ? "bg-white" : "bg-[#090909]"}
  `;

  const toolbarStyle = darkMode ? {} : { boxShadow: "2px 2px 5px black" };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div
        className={`${darkMode ? "shadow-lg shadow-black/15" : "shadow-lg shadow-white/10"}`}
      >
        <Toolbar className={toolbarClasses} style={toolbarStyle}>
          {/* Dark Mode + Links */}
          <LinksANDIconDarkMode />

          {/* /////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////// */}

          {/* Menu */}
          <IconMenuBar />
        </Toolbar>
      </div>
    </Box>
  );
}
