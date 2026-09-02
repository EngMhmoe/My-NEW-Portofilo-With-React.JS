// ============================================================
// React Hooks
// ============================================================
import { useState } from "react";

// ============================================================
// Components
// ============================================================
import Header from "./Components/Header/Header";
import IconScrollBar from "./Components/IconScrollBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import MainSection from "./Components/MainSection/MainSection";
import ContactUS from "./Components/ContactUS/ContactUS";
import Footer from "./Components/Footer/Footer";
import Stats from "./Components/HeroSection/States";
import ScrollIndicator from "./Components/Scroll indicator/ScrollIndicator";

// ============================================================
// Context Provider
// ============================================================
import DarkMode from "./context/ContextDarkMode";

// ============================================================
// Hooks
// ============================================================
import useDocumentLanguage from "./Hook/useDocumentLanguage";

// ============================================================
// Material UI
// ============================================================
import Divider from "@mui/material/Divider";

// ============================================================
// Component
// ============================================================
export default function App() {
  // ============================================================
  // Dark Mode
  // ============================================================
  const [darkMode, setDarkMode] = useState(false);

  // ============================================================
  // Document Language
  // ============================================================
  useDocumentLanguage();

  // ============================================================
  // Styles
  // ============================================================
  const appStyle = darkMode ? "bg-[#f5f4f4]" : "bg-[#121212]";

  const mainContainerStyle = `
    sm:mx-10
    pt-6
    img
    ${darkMode ? "bg-white" : "bg-black"}
  `;

  const headerContainerStyle = `
    Container-Header
  `;

  const heroContainerStyle = `
    container-mainSection
  `;

  const statsContainerStyle = `
    mt-50
  `;

  const mainSectionContainerStyle = `
    Container-MainSection
    mt-50
    lg:mx-15
    mx-5
  `;

  const contactContainerStyle = `
    Container-MainSection
    mt-100
    lg:mx-0
    mx-6
  `;

  const dividerContainerStyle = `
    mt-70
  `;

  const dividerStyle = darkMode ? "bg-black/5" : "bg-white/20";

  // ============================================================
  // Render
  // ============================================================
  return (
    <>
      {/* ======================================================
          Start Component App UI
      ====================================================== */}

      <DarkMode.Provider
        value={{
          darkMode: darkMode,
          setDarkMode: setDarkMode,
        }}
      >
        <div className={appStyle}>
          <div className={mainContainerStyle}>
            {/* Header */}
            <div className={headerContainerStyle}>
              <Header />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Hero Section */}
            <div className={heroContainerStyle}>
              <HeroSection />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Scroll Indicator */}
            <ScrollIndicator />

            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Stats */}
            <div className={statsContainerStyle}>
              <Stats />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Main Section */}
            <div className={mainSectionContainerStyle}>
              <MainSection />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Contact US */}
            <div className={contactContainerStyle} id="Contact">
              <ContactUS />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Divider */}
            <div className={dividerContainerStyle}>
              <Divider className={dividerStyle} />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Footer */}
            <Footer />

            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            {/* Scroll To Top */}
            <IconScrollBar />
          </div>
        </div>
      </DarkMode.Provider>
      {/* ======================================================
          End Component App UI
      ====================================================== */}
    </>
  );
}
