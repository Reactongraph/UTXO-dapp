import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { CommonButton } from "../../components/Common/CommonButton";

export const LeftConatiner = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;
  /* width: 100%; */
  @media screen and (max-width: 1475px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: fit-content;
    /* width: 25%; */
    gap: 65px;
  }
  img {
    width: 171px;
    height: 65px;
    @media screen and (max-width: 600px) {
      height: 50px;
      width: auto;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: fit-content;
    gap: 0px;
  }
`;

export const HeadConatiner = styled.div(
  {},
  ({ theme }) => `
  display: flex;
  gap: 20px;
  flex-direction: column;
  background: ${
    theme?.mode === "light" ? "rgba(145, 248, 232, 0.1)" : theme?.primary?.light
  };
  border-radius: 4px;
  padding: 15px ;
  // height: 94.24px; 
  width: 196px !important;;
`
);

export const RightWrapper = styled.div(
  {},
  ({ theme }) => `
  padding: 12px;
  background: ${theme?.primary?.dark};
  display: flex;
  border-radius: 6px;
  // @media screen and (max-width: 756px) {
  //   width: 36px;
  //   overflow: hidden;
  //   border-radius: 50%;
  //   padding: 9px 12px;
  //   margin-top: 1px;
  // }
`
);

export const MainWrapper = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;
  @media screen and (max-width: 756px) {
    gap: 1px;
  }
  @media screen and (max-width: 718px) {
    position: absolute;
    left: 10px;
    top: 90px;
  }
`;

export const LeftMainConatiner = styled.div`
@media screen and (max-width: 626px) {
position:absolute
left:10px
}
`;

export const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  // flex-direction: column;
  // @media screen and (max-width: 756px) {
  //   flex-direction: row;
  // }
`;

export const BoxWrap = styled(Box)`
  gap: 24px;
  // row-gap: 20px;
  // @media screen and (max-width: 1217px) {
  //   width: 70rem;
  // }
`;

export const BoxContent = styled(Box)`
  // @media screen and (max-width: 1217px) {
  //   width: 288%;
  //   overflow-x: scroll;
  //   &::-webkit-scrollbar {
  //     width: 2px;
  //     height: 4px;
  //     border-radius:20px;
  //     background-color: rgb(236, 241, 240);
  //   }
  //   &::-webkit-scrollbar-thumb {
  //     background-color: #808080;
  //     border-radius: 20px;
  //   }
`;

export const ConnectStyledItem = styled(Grid)(({ theme }) => ({
  columnGap: "17px",
  padding: "9px 8px",
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  border: "1px solid transparent",
  backgroundColor: theme?.primary?.popoverBg,
  maxWidth: "239px",
  width: "239px",
  "&:hover": {
    color: "#0FAE96",
    backgroundColor: "#F4FEFD",
    border: "1px solid #0FAE96",
    ".MuiTypography-root": {
      color: "#0FAE96",
    },
  },
  "&.selected": {
    color: "#0FAE96",
    backgroundColor: "#F4FEFD",
    border: "1px solid #0FAE96",
  },
}));

export const HeaderText = styled.div(
  {},
  ({ color }) => `
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  color: ${color};
  :hover {
    cursor: pointer;
    color: #1dd773;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: normal;
  }
`
);

export const MainBox = styled(Box)(
  {},
  ({ mode }) => `
background: ${
    mode === "dark"
      ? `url('/images/dark mode.jpg') no-repeat center center/cover`
      : `url('/images/light mode.jpg') no-repeat center center/cover`
  };
  ::before {
    /* content: "";
    background: url("/images/gradient.svg") no-repeat center center/cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    z-index: -1; */
    /* max-height: 1491px;
    width: 100%; */
  }
  /* ::after {
    content: "";
    background: url("/images/gradient2.svg");
    position: absolute;
    opacity: 1;
    top: 414px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
  } */
`
);

export const LastGradientBox = styled(Box)`
  /* ::before {
    content: "";
    background: url('/images/gradient3.svg');
    position: absolute;
    bottom: 0px;
    right: 0px;
    height: 2383px;
    width: 100%;
  } */
`;

export const GradientBox = styled(Box)`
  /* ::after {
  content: '';
  background: url('/images/gradient3.svg') no-repeat;
  position: absolute;
    bottom: 0px;
    right: 0px;
    height: 2383px;
    width: 100%;
   background-position: right bottom; 
} */
`;

export const StyledButton = styled(CommonButton)`
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    padding: 10px 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 468px) {
    font-size: 14px;
    padding: 10px 10px;
  }
`;
