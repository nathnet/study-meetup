import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       //   main: "rgb(77, 42, 69)", commenting this out when primary and secondary color is decided
  //     },
  //     secondary: {
  //       //   main: "rgb(69, 42, 212)",
  //     },
  //   },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
export default theme;
