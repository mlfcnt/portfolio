import React from "react";
import { useMediaQuery } from "react-responsive";

export const useResponsiveHelpers = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return {
    isDesktopOrLaptop,
  };
};
