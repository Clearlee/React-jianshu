import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
    @font-face {
        font-family: "iconfont";
        src: url('iconfont.eot?t=1573107976084'); /* IE9 */
        src: url('iconfont.eot?t=1573107976084#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('iconfont.woff?t=1573107976084') format('woff'),
        url('iconfont.ttf?t=1573107976084') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('iconfont.svg?t=1573107976084#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;






