import React from "react";
import { useColorMode, Image } from "theme-ui";

export default props => {
  const [mode] = useColorMode();
  const modeStyle =
    mode === "dark" ? { filter: "url(#id-of-your-filter) invert(100%)" } : {};

  return <Image {...props} style={modeStyle} />;
};
