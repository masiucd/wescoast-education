/* eslint-disable no-restricted-syntax */

import styled from 'styled-components';


declare module 'styled-components'{
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
      warning: string;
      danger: string;
      bgShadow: string;
    };
  }
}
