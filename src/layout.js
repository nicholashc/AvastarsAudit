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

  return (
    <div
      sx={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <aside
        sx={{
          flexGrow: 1,
          flexBasis: "sidebar"
        }}
      >
        <Sidenav
          {...props}
          sx={{
            mt: 3,
            ml: 3,
            width: 150
          }}
        >
          <Links />
          <a
            {...props}
            title="dark / light"
            onClick={handleClick}
            role="button"
            aria-hidden="true"
            sx={{
              border: "solid",
              borderWidth: "2px",
              mx: 2,
              px: 2,
              mt: 3,
              textAlign: "center",
              "&:hover": {
                color: "accent"
              }
            }}
          >
            dark/light
          </a>
        </Sidenav>
      </aside>
      <main
        sx={{
          flexGrow: 99999,
          flexBasis: 0,
          minWidth: 320
        }}
      >
        <div
          className={mode}
          sx={{
            maxWidth: 768,
            px: 1
          }}
        >
          {props.children}
        </div>
      </main>
    </div>
  );
};
