const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading"
};

export default {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    text: "#222222",
    background: "#ffffff",
    primary: "#ff9999",
    secondary: "#99cc99 ",
    highlight: "#cc99cc",
    accent: "#99ccff",
    accentHighlight: "#ffffff",
    muted: "#ffffff",
    gray: "#cccccc",
    modes: {
      light: {
        text: "#212121",
        background: "#ffffff",
        primary: "#ff9999",
        secondary: "#99cc99 ",
        highlight: "#cc99cc",
        accent: "#99ccff",
        accentHighlight: "#ffffff",
        muted: "#ffffff",
        gray: "#cccccc"
      },
      dark: {
        text: "#eeeeee",
        background: "#212121",
        primary: "#ff9999",
        secondary: "#99cc99 ",
        highlight: "#cc99cc",
        accent: "#99ccff",
        accentHighlight: "#222222",
        muted: "#222222",
        gray: "#cccccc"
      }
    }
  },
  fonts: {
    body: "Menlo, monospace",
    heading: "Menlo, monospace",
    monospace: "Menlo, monospace"
  },
  sizes: {
    sidebar: 256
  },
  fontSizes: [12, 14, 16, 16, 18, 20],
  fontWeights: {
    body: 400,
    heading: 100,
    display: 100
  },
  lineHeights: {
    body: 1.7,
    heading: 1.7
  },
  textStyles: {
    heading
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      mb: 2,
      variant: "textStyles.heading",
      fontSize: 24
    },
    h2: {
      mt: 5,
      mb: 2,
      pb: 2,
      borderBottom: t => `2px solid ${t.colors.primary}`,
      variant: "textStyles.heading",
      textTransform: "uppercase",
      fontWeight: 200,
      fontSize: 5
    },
    h3: {
      mt: 5,
      mb: 2,
      pb: 2,
      borderBottom: t => `2px solid ${t.colors.highlight}`,
      variant: "textStyles.heading",
      fontSize: 4
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3
    },
    h5: {
      mt: 4,
      mb: 2,
      pb: 2,
      borderBottom: t => `2px solid ${t.colors.primary}`,
      variant: "textStyles.heading",
      display: "inline",
      fontSize: 2
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      wordWrap: "wrap-word",
      code: {
        color: "inherit"
      }
    },
    ul: {
      listStyleType: "disc"
    },
    a: {
      textDecoration: "underline",
      color: "text",
      "&:hover": {
        color: "primary",
        cursor: "pointer"
      }
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 2
    },
    blockquote: {
      border: t => `2px solid ${t.colors.accent}`,
      boxShadow: t => `4px 4px ${t.colors.accent}`,
      pb: 1,
      pt: 1,
      pl: 4,
      pr: 4
    },
    code: {},
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "text",
        borderBottomStyle: "solid"
      }
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "1px"
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "0px"
    },
    hr: {
      border: 0,
      borderBottom: "2px solid",
      borderColor: "text"
    },
    img: {
      pt: 4,
      p5: 4,
      mx: "auto",
      maxWidth: "100%"
    },
    button: {
      border: "solid",
      borderWidth: "2px"
    }
  },
  prism: {
    ".prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      color: "text"
    },
    ".comment": {
      fontStyle: "italic",
      color: "gray"
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
      color: "accent"
    },
    ".atrule,.attr-value,.keyword": {
      color: "primary"
    },
    ".selector,.attr-name,.string,.char,.builtin,.inserted": {
      color: "secondary"
    }
  }
};
