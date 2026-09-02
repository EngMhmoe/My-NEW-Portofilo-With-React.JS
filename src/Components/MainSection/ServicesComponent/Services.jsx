//============================================================
// Components UI
//============================================================
import MineTitle_AND_Description_Section from "../../../UI/MineTitle_AND_Description_Section";
import Background_Decoration from "./Background_Decoration";
import ServicesGrid from "./ServicesGrid";

//============================================================
// Component
//============================================================
const Services = () => {
  //==========================================================
  // Data
  //==========================================================

  // Services Title
  const servicesTitle = {
    title1: "What I",
    title2: "Offer",
  };

  // Services Description
  const servicesDescription =
    "I provide modern front-end development services focused on building responsive, user-friendly, and high-performance web experiences";

  //==========================================================
  // Styles
  //==========================================================

  // Section Style
  const sectionStyle = `
    relative
    z-0
    overflow-hidden
    text-blue-200
  `;

  // Container Style
  const containerStyle = `
    flex
    flex-col
    gap-20
  `;

  //==========================================================
  // Render
  //==========================================================
  return (
    // Services Component
    <section id="services" className={sectionStyle}>
      {/* Background Decoration Component */}
      <Background_Decoration />

      {/* //////////////////////////////////////////////////////// */}
      {/* //////////////////////////////////////////////////////// */}

      {/* Services Content */}
      <div className={containerStyle}>
        {/* Title And Description Component */}
        <MineTitle_AND_Description_Section
          Badge="services"
          Title={servicesTitle}
          Description={servicesDescription}
        />

        {/* //////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////// */}

        {/* Services Grid Component */}
        <ServicesGrid />
      </div>
    </section>
  );
};

//============================================================
// Export
//============================================================
export default Services;
