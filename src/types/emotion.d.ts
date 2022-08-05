import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      danger: {
        main: string;
      };
      text: {
        white: string;
        grey: string;
        lightGrey: string;
        black: string;
        danger: string;
      };
      background: {
        white: string;
        black: string;
      };
      divider: {
        grey: string;
        darkGrey: string;
      };
    };
    spacing: (unit?: number) => number;
  }
}
