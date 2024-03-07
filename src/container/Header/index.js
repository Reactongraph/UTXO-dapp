import { Box } from "@mui/material";
import React, { useState } from "react";
import { HeaderText, LeftConatiner, RightContainer, StyledButton } from "./Styled";
import { CommonButton } from "../../components/Common/CommonButton";
import CommonPopover from "../../components/Common/CommonPopover";
import PopoverContentData from "./popoverContentData";
import { HeaderCard, RightContent } from "./headerContent";
import { useTheme } from "@mui/material/styles";
import ToggleButton from "../../components/ToggleButton/toggleButton";

const Header = () => {
  const [viewPopover, setViewPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setViewPopover(!viewPopover);
  };
  // console.log("themetheme", theme?.palette?.primary);
  return (
    <>
      <Box position={"relative"} zIndex={"1"}>
        <Box
          display="flex"
          justifyContent="space-between"
          padding="42px 112px 0px"
          gap="30px"
          sx={{
            "@media screen and (max-width: 1024px)": {
              padding: "42px 60px 0",
            },
            "@media screen and (max-width: 768px)": {
              padding: "42px 40px 20px",
            },
            "@media screen and (max-width: 468px)": {
              padding: "42px 20px 20px",
            },
          }}
          position={"relative"}
          zIndex={"1"}
          alignItems={"center"}
        >
          <LeftConatiner>
            <Box>
              {theme?.palette?.mode === "light" ? (
                <img src="/images/logo.svg" alt="logo"></img>
              ) : (
                <img src="/images/logo-dark-header.svg" alt="logo" />
              )}
            </Box>
            {/* <HeaderCard theme={theme?.palette} /> */}
          </LeftConatiner>
          <Box
            display={"flex"}
            gap={"74px"}
            sx={{
              "@media screen and (max-width: 1024px)": {
                gap: "30px",
              },
            }}
          >
            <HeaderText>Explore</HeaderText>
            <HeaderText>Socials</HeaderText>
          </Box>
          <RightContainer>
            <Box>
              {/* <RightContent theme={theme?.palette} /> */}
              <ToggleButton />
            </Box>
            <Box id="header-pop">
              {/* <CommonButton
                fz="1.125em"
                pd="14px 31px"
                aria-describedby={viewPopover ? "simple-popover" : undefined}
                onClick={handleClick}
              > */}
              <StyledButton
                fz="24px"
                pd="12px 33.5px"
                br="16px"
                fc="#121212"
                fcHover="#121212"
                bg="#06FF79"
                bgHover="#06FF79"
                aria-describedby={viewPopover ? "simple-popover" : undefined}
                onClick={handleClick}
              >
                Enter Dapp
              </StyledButton>
              <CommonPopover
                open={viewPopover}
                content={<PopoverContentData theme={theme?.palette} />}
                onClose={() => setViewPopover(false)}
                anchorEl={anchorEl}
              />
            </Box>
          </RightContainer>
        </Box>
        {theme?.palette?.mode === "dark" && window.innerWidth > 756 && (
          <Box
            width={"681.67px"}
            height={"520.87px"}
            position={"absolute"}
            top="125px"
            right="0"
          >
            <img src="/images/shadow-top.png" alt="logo" width={"100%"} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Header;
