import * as React from 'react'
import {GlobalStyles}from './Globalstyles'
import {ThemeProvider} from 'styled-components';
import {  theme } from './theme';
interface Props {

}

 const Layout: React.FC<Props> = (props) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        {props.children}
      </ThemeProvider>
    );
}
export default Layout