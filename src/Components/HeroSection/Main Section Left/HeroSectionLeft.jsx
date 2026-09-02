//============================================================
// Data
//============================================================
import { myPerson } from "../../../Data/HerSection Component/myPerson";

//============================================================
// Components
//============================================================
import MyImage from "./MyImage";
import Available from "./Available";
import MyDetails from "./MyDetails";
import My_Links_SoshaleMedia from "./My_Links_SoshaleMedia";
import DownloadCV from "./DownloadCV";

//============================================================
// Component
//============================================================
export default function MainSectionLeft() {
  // Styles
  const containerStyle = "flex flex-col gap-8";

  const socialMediaStyle = `
    SoshaleMedia
    flex
    flex-wrap
    flex-row
    gap-15
    items-center
  `;

  return (
    <div className={containerStyle}>
      {/* My Image Component */}
      <MyImage {...myPerson} />

      {/* /////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

      {/* Available For Work Component */}
      <Available {...myPerson} />

      {/* /////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

      {/* My Details Component */}
      <MyDetails {...myPerson} />

      {/* /////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////// */}

      {/* Social Media Section */}
      <div className={socialMediaStyle}>
        {/* Social Media Links Component */}
        <My_Links_SoshaleMedia />

        {/* //////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////// */}

        {/* Download CV Component */}
        <DownloadCV />
      </div>
    </div>
  );
}
