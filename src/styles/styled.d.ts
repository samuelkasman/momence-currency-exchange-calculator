import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      backgroundGlass: string;
      borderGlass: string;
      accent: string;
    };
    layout: {
      maxWidth: string;
      radius: string;
      blur: string;
    };
  }
}
