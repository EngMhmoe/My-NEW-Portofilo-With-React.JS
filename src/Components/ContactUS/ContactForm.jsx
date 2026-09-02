//============================================================
// Libraries
//============================================================
import { useForm, ValidationError } from "@formspree/react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

//============================================================
// Context
//============================================================
import Mohamed from "../../context/ContextDarkMode";

//============================================================
// Components
//============================================================
import BackgroundDecoration from "./BackgroundDecoration";
import LottieAnimationEmail from "./LottieAnimationEmail";
import AlertDoneSendMassage from "./AlertDoneSendMassage";
import BtnSendMessage from "./BtnSendMessage";

//============================================================
// Component
//============================================================
const ContactForm = () => {
  //==========================================================
  // Dark Mode
  //==========================================================
  const { darkMode } = useContext(Mohamed);

  //==========================================================
  // Translation
  //==========================================================
  const { t } = useTranslation();

  //==========================================================
  // Formspree
  //==========================================================
  const [state, handleSubmit] = useForm("mreezeln");

  //==========================================================
  // Form Data
  //==========================================================
  const [DataInputs, setDataInputs] = useState({
    name: "",
    email: "",
    mass: "",
  });

  //==========================================================
  // Submit Form
  //==========================================================
  async function handles(e) {
    e.preventDefault();

    await handleSubmit(e);

    setDataInputs({
      name: "",
      email: "",
      mass: "",
    });
  }

  //==========================================================
  // Styles
  //==========================================================
  const sectionStyle = `
    flex
    justify-center
  `;

  const containerStyle = `
    glass-card
    xl:w-[65%]
    lg:w-[75%]
    md:w-[90%]
    w-full
    rounded-4xl
    md:p-10
    sm:p-8
    py-8
    px-6
    relative
    overflow-hidden
    backdrop-blur-sm
    transition-all
    duration-1000
    shadow-lg
    border-2
    ${
      darkMode
        ? "bg-[#ea9e9e40] border-red-300/30 shadow-red-700/20"
        : "bg-[#aa00002f] border-white/10"
    }
  `;

  const formStyle = `
    space-y-7
    capitalize
    ${darkMode ? "text-black" : "text-blue-100"}
  `;

  const inputStyle = `
    w-full
    px-4
    py-3
    rounded-lg
    border
    border-border
    text-foreground
    placeholder:text-muted-foreground
    focus:outline-none
    transition-colors
    duration-1000
    shadow
    focus:border-red-600/50
    ${
      darkMode
        ? "bg-[#ffffffde] text-black border-red-300/40 shadow-red-950/30"
        : "bg-[#d100001d] text-white border-white/15 shadow-red-600/20"
    }
  `;

  //==========================================================
  // Render
  //==========================================================
  return (
    <section id="contact" className={sectionStyle}>
      {/*======================================================
          Contact Container
      ======================================================*/}
      <div className={containerStyle}>
        {/* Background Decoration */}
        <BackgroundDecoration />

        {/*====================================================
            Contact Content
        ====================================================*/}
        <div className="relative grid md:grid-cols-2 gap-y-10">
          {/*==================================================
              Contact Form
          ==================================================*/}
          <form onSubmit={handles} className={formStyle}>
            {/*================================================
                Name
            =================================================*/}
            <div>
              <label htmlFor="name" className="block text-lg font-bold mb-2">
                {t("name")}
              </label>

              {/* ///////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////// */}

              <input
                required
                type="text"
                id="name"
                name="Full Name"
                value={DataInputs.name}
                onChange={(e) =>
                  setDataInputs({
                    ...DataInputs,
                    name: e.target.value,
                  })
                }
                className={inputStyle}
                placeholder={t("Your Name")}
              />

              {/* ///////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////// */}

              <ValidationError
                prefix="Full Name"
                field="Full Name"
                errors={state.errors}
              />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////// */}

            {/*================================================
                Email
            =================================================*/}
            <div>
              <label htmlFor="email" className="block text-lg font-bold mb-2">
                {t("email")}
              </label>

              {/* ///////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////// */}

              <input
                required
                type="email"
                id="email"
                name="Email"
                value={DataInputs.email}
                onChange={(e) =>
                  setDataInputs({
                    ...DataInputs,
                    email: e.target.value,
                  })
                }
                className={inputStyle}
                placeholder="Example@email.com"
              />

              {/* ///////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////// */}

              <ValidationError
                prefix="Email"
                field="Email"
                errors={state.errors}
              />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////// */}

            {/*================================================
                Message
            =================================================*/}
            <div>
              <label htmlFor="message" className="block text-lg font-bold mb-2">
                {t("message")}
              </label>

              {/* ///////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////// */}

              <textarea
                required
                id="message"
                name="Message"
                rows={4}
                value={DataInputs.mass}
                onChange={(e) =>
                  setDataInputs({
                    ...DataInputs,
                    mass: e.target.value,
                  })
                }
                className={inputStyle}
                placeholder={`${t("Tell me about your project")}...`}
              />

              {/* ///////////////////////////////////////////////////////////////////////// */}
              {/* ///////////////////////////////////////////////////////////////////////// */}

              <ValidationError
                prefix="Message"
                field="Message"
                errors={state.errors}
              />
            </div>

            {/* ///////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////// */}

            {/*================================================
                Send Message Button
            =================================================*/}
            <BtnSendMessage state={state} />

            {/* ///////////////////////////////////////////////////////////////////////// */}
            {/* ///////////////////////////////////////////////////////////////////////// */}

            {/*================================================
                Success Message
            =================================================*/}
            {state.succeeded && <AlertDoneSendMassage />}
          </form>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/*==================================================
              Contact Animation
          ==================================================*/}
          <LottieAnimationEmail />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
