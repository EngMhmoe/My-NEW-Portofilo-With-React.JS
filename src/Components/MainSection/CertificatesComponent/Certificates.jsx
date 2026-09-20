// ============================================================
// Data
// ============================================================
import { education } from "../../../Data/Certificates Component/education";
import { certifications } from "../../../Data/Certificates Component/certifications";

// ============================================================
// UI Components
// ============================================================
import SubHeading from "./SubHeading";
import EducationCard from "./EducationCard";
import CertificateCard from "./CertificateCard";

// ============================================================
// Component UI
// ============================================================
import MineTitle_AND_Description_Section from "../../../UI/MineTitle_AND_Description_Section";

// ============================================================
// Component
// ============================================================
export default function Certificates() {
  // ============================================================
  // Styles
  // ============================================================
  const sectionStyle = `
    w-full
  `;

  const educationSectionStyle = `
    my-20
  `;

  const certificationsGridStyle = `
    grid
    grid-cols-1
    gap-x-6
    gap-y-10
    lg:grid-cols-2
  `;

  // ============================================================
  // Data
  // ============================================================
  const certificationsTitle = {
    title1: "my",
    title2: "education certifications",
  };

  const certificationsDescription =
    "Professional certifications and training that support my journey as a Front-End Developer";

  // ============================================================
  // Render
  // ============================================================
  return (
    <section className={sectionStyle}>
      {/* ============================================================
          Section Header
          ============================================================ */}

      <MineTitle_AND_Description_Section
        Badge={"certifications"}
        Title={certificationsTitle}
        Description={certificationsDescription}
      />

      {/* ============================================================
          Education
          ============================================================ */}

      <div className={educationSectionStyle}>
        {/* ============================================================
            Sub Heading
            ============================================================ */}

        <SubHeading title={"education"} />

        {/* ============================================================
            Education Card
            ============================================================ */}

        <EducationCard education={education} />
      </div>

      {/* ============================================================
          Certifications
          ============================================================ */}

      <div>
        {/* ============================================================
            Sub Heading
            ============================================================ */}

        <SubHeading title={"certifications"} />

        {/* ============================================================
            Certification Cards
            ============================================================ */}

        <div className={certificationsGridStyle}>
          {certifications.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
