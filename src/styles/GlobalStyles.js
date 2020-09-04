import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-color: hsl(228, 45%, 44%);
    --white-color: #e8e8e8;
    --black-color: #585666;
    --dark-color: #3a4363;
    --orange-color: #eca211;
    --blue-color: #506af2;
    --red-color: #dc3b5a;
    --purple-color: #8c5ae5;
    --cian-color: #4dbdd2;
  }
  
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
    text-decoration: none;
    list-style: none;
    color: var(--black-color)
  }
`