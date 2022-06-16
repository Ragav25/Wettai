import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *,  *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    -moz-box-sizing:border-box; 
    -webkit-box-sizing:border-box; 
    -ms-box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    }

    :root {
        --theme-primary: #307592;
        --theme-primary-opt-two: #336B87;
        --theme-secondary: #F8F8F8;
        --theme-tertiary: #FFFFFF;
        --theme-grey: #DEDEDE;

        /* background root */
        --bg-applied: rgba(252, 226, 94, 0.44);
        --bg-selected: rgba(61, 235, 162, 0.43);
        --bg-hitlist: rgba(113, 111, 234, 0.44);
        --bg-interviewing: rgba(115, 193, 225, 0.44);
        --bg-notselected: rgba(237, 106, 88, 0.44);

        /* color root */
        --color-primary: #FFFFFF;
        --color-applied: #D6B403;
        --color-selected: #1F6B0D;
        --color-hitlist: #613659;
        --color-interviewing: #057DCD;
        --color-notselected: #D73924;

        --color-lightgrey: #EFF1F1;
        --color-greyOnWhite: #979696;

        /* heights root */
        --height-navbar: 80px;
        --height-home-main: calc(100vh - var(--height-navbar));

        /* width root */
        --width-left-main: 48.5%;
        --width-right-main: calc(100% - var(--width-left-main));
        
        --wd-leftSection: 45%;
        --wd-rightSection: calc(100% - var(--wd-leftSection));

        --wd-sortlist: 30%;
        --wd-pagination: calc(100% - var(--wd-sortlist));

        --wd-skills: 250px;
        --wd-statusDetails: calc(100% - var(--wd-skills));

        --wd-singleJobSplit-left: 72%;
        --wd-singleJobSplit-right: calc(100% - var(--wd-singleJobSplit-left));

        /* padding root */
        --padding-horizontal-home: 30px;
        --padding-vertical-home: 26px;

        --pd-top-bottom-home: 14px;
        --pd-left-right-home: 17px;

        /* margin root */
        --mg-top-home-leftcontainer: 18px;

        /* border radius root */
        --bdr-singlejob-container: 3.5px;

        /* font root */
        --font-skills-left: 0.73rem;
        --font-date-board: 0.82rem;

    }
`;
 
export default GlobalStyle;