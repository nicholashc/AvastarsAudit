import React from "react";
import ThemeUIPrism from "@theme-ui/prism";
import PrismCore from "prismjs/components/prism-core";
import Image from "../components/image";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-solidity";

export default {
  pre: props => props.children,
  code: props => <ThemeUIPrism {...props} Prism={PrismCore} />,
  img: props => <Image {...props} />
};
