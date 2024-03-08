import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { HeaderTypography } from "../Common/CommonTypography";
import { useThemeContext } from "../../theme/theme";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 120,
  height: 47,
  width: 78,
  height: 37,
  padding: 0,
  margin: 0,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        height: "37px",
        backgroundColor: theme.palette.mode === "dark" ? "#353333" : "#ECF1F0",
        // backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ECF1F0",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#0FAE96",
    width: 41,
    height: 41,
    marginTop: "1px",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#353333" : "#ECF1F0",
    borderRadius: 60,
  },
}));

const MaterialUISwitchSmall = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#353333" : "#ECF1F0",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#0FAE96",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#ECF1F0",
    borderRadius: 60,
  },
}));

const Android12Switch = styled(Switch)(({ theme }) => {
  return {
    width: 78,
    height: 37,
    padding: 0,
    margin: "0 !important",
    "& .MuiSwitch-track": {
      opacity: "1 !important",
      backgroundColor:
        theme.palette.mode === "dark"
          ? "#121212 !important"
          : "#06FF79 !important",
      borderRadius: 40,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 28,
        height: 28,
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 32 32"><path fill="${encodeURIComponent(
          "#FFD057"
        )}" d="M11.3309 5.98493L9.04 3.69635L7.24545 5.49909L9.52364 7.78767L11.3309 5.98493ZM7.81818 13.2215H4V15.7785H7.81818V13.2215ZM19.2727 0.5H16.7273V4.27169H19.2727V0.5ZM28.7545 5.49909L26.96 3.69635L24.6818 5.98493L26.4764 7.78767L28.7545 5.49909ZM24.6691 23.0151L26.9473 25.3164L28.7418 23.5137L26.4509 21.2251L24.6691 23.0151ZM28.1818 13.2215V15.7785H32V13.2215H28.1818ZM18 6.82877C13.7873 6.82877 10.3636 10.268 10.3636 14.5C10.3636 18.732 13.7873 22.1712 18 22.1712C22.2127 22.1712 25.6364 18.732 25.6364 14.5C25.6364 10.268 22.2127 6.82877 18 6.82877ZM16.7273 28.5H19.2727V24.7283H16.7273V28.5ZM7.24545 23.5009L9.04 25.3037L11.3182 23.0023L9.52364 21.1995L7.24545 23.5009Z"/></svg>')`,
        left: 4,
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 39 37" fill="none"><path d="M10.6129 4.5L11.424 7.15378H14.049L11.9254 8.79391L12.7365 11.4477L10.6129 9.80756L8.48929 11.4477L9.30044 8.79391L7.17683 7.15378H9.80175L10.6129 4.5Z" fill="%23FFD057"/><g filter="url(%23filter0_d_110_22)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7898 19.2167C12.2289 20.4789 14.0728 21.2377 16.0812 21.2377C20.6734 21.2377 24.4055 17.2705 24.4055 12.3888C24.4055 10.2539 23.6917 8.29395 22.5044 6.76418C22.633 6.75986 22.7622 6.75769 22.8918 6.75769C29.5714 6.75769 34.9999 12.5283 34.9999 19.6289C34.9999 26.7294 29.5714 32.5 22.8918 32.5C16.2122 32.5 10.7837 26.7294 10.7837 19.6289C10.7837 19.4909 10.7857 19.3535 10.7898 19.2167Z" fill="%23FFD057"/></g><defs><filter id="filter0_d_110_22" x="0.783691" y="0.75769" width="44.2162" height="45.7423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_22"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_110_22" result="shape"/></filter></defs></svg>')`,
        top: "51%",
        right: 8,
      },
    },
    "& .MuiSwitch-thumb": {
      // boxShadow: "0px 4px 15px 0px #00000040",
      width: 28,
      height: 28,
      margin: 4,
      padding: 0,
      backgroundColor: "#fff",
    },
    "& .MuiSwitch-switchBase": {
      padding: 0,
    },
    "& .Mui-checked": {
      transform: "translateX(41px) !important",
    },
  };
});

export default function ToggleButton() {
  const { theme, toggleTheme } = useThemeContext();
  const [switchState, setSwitchState] = React.useState(
    theme === "dark" ? false : true
  );
  const [windowWidth, setWindowWidth] = React.useState(window?.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
    toggleTheme();
  };
  console.log("theme?.palette?.mode", theme);

  return (
    <FormGroup position="relative">
      {/* <FormControlLabel
        position="relative"
        id={"switch-toggle"}
        control={
          // windowWidth > 756 ? (
          //   <MaterialUISwitch
          //     sx={{ m: 1 }}
          //     defaultChecked={switchState}
          //     onChange={handleSwitchChange}
          //   />
          // ) : (
          //   <MaterialUISwitchSmall
          //     defaultChecked={switchState}
          //     onChange={handleSwitchChange}
          //   />
          // )
          <MaterialUISwitch
              sx={{ m: 1 }}
              defaultChecked={switchState}
              onChange={handleSwitchChange}
            />
        }
      /> */}
      <FormControlLabel
        position="relative"
        id={"switch-toggle"}
        control={
          <Android12Switch
            sx={{ m: 1 }}
            defaultChecked={switchState}
            onChange={handleSwitchChange}
          />
        }
      />
      {/* {windowWidth > 756 ? (
        <HeaderTypography
          top={0}
          bottom={0}
          fw="500"
          fc={theme === "dark" ? "#fff" : "#000"}
          left={`${switchState ? "12px" : ""}`}
          right={`${switchState ? "" : "46px"}`}
          fz="0.938em"
          position={"absolute"}
        >
          {theme === "dark" ? "Dark" : "Light"}
        </HeaderTypography>
      ) : (
        ""
      )} */}
    </FormGroup>
  );
}
