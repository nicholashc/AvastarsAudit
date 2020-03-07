/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { Sidenav } from "@theme-ui/sidenav";
import Links from "./links.mdx";

export default props => {
  const [mode, setMode] = useColorMode();

  const handleClick = e => {
    e.preventDefault();
    console.log(`${mode}`);
    setMode(mode === "light" ? "dark" : "light");
  };

  const modeIcon = mode === "light" ? "☽" : "☼";

  return (
    <div
      sx={{
        display: "flex"
      }}
    >
      <aside>
        <Sidenav
          {...props}
          sx={{
            fontWeight: "normal",
            mt: 3,
            pl: 2,
            width: 160,
            a: {
              fontWeight: 100
            }
          }}
        >
          <Links {...props} />
          <div
            {...props}
            title="dark / light"
            onClick={handleClick}
            role="button"
            aria-hidden="true"
            sx={{
              cursor: "pointer",
              mt: 5,
              pt: 2,
              fontSize: 32,
              "-webkit-transform": "rotate(45deg)",
              textAlign: "left",
              "&:hover": {
                color: "#ffcc66"
              }
            }}
          >
            {modeIcon}
          </div>
        </Sidenav>
      </aside>
      <main
        sx={{
          flexGrow: 99999,
          minWidth: 320,
          px: 2
        }}
      >
        <div
          sx={{
            maxWidth: 768,
            px: 3
          }}
        >
          {props.children}
        </div>
      </main>
    </div>
  );
};
