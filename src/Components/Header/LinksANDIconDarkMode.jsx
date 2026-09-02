/*============================================================
 * Material UI
 *============================================================*/
import Typography from "@mui/material/Typography";

//============================================================
// Components
//============================================================
import LinksHeader from "./LinksHeader";
import IconDarkMode from "./IconDarkMode";
import SelectedLang from "./SelectedLang";

export default function LinksANDIconDarkMode() {
  return (
    <Typography
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        // gap: "70px",
        paddingBlock: "10px",
      }}
    >
      {/* Header Links */}
      <LinksHeader />

      {/* ///////////////////////////////////////// */}
      {/* ///////////////////////////////////////// */}

      <section className="flex items-center xl:gap-5 gap-2 lg:ms-0 ms-auto">
        {/* Dark Mode */}
        <IconDarkMode />

        {/* ///////////////////////////////////////// */}
        {/* ///////////////////////////////////////// */}

        <SelectedLang />
      </section>
    </Typography>
  );
}
