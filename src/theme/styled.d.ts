import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      border: string;
      text: string;
      muted: string;
      primary: string;
      warning: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    shadow: string;
    spacing: (factor: number) => string;
  }
}
