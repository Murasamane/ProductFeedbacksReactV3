import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jost", sans-serif;
  }
  *:disabled {
    cursor: not-allowed;
  }

/* #root{
  height: 100dvh;
} */
  input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: #f7f8fd;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    scroll-behavior: smooth;
    position: relative;
  }
  body::-webkit-scrollbar{
   width: 0;
  }
  a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
img {
  max-width: 100%;
}


.loader {
        transform: rotateZ(45deg);
        perspective: 1000px;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        color: #61DBFB;
        margin: auto;
      }
        .loader:before,
        .loader:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: 1s spin linear infinite;
        }
        .loader:after {
          color: #61DBFB;
          transform: rotateY(70deg);
          animation-delay: .4s;
        }

      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotateZ(360deg);
        }
      }

      @keyframes rotateccw {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }

      @keyframes spin {
        0%,
        100% {
          box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
          box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
          box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
          box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
          box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
          box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
          box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
          box-shadow: .2em -.2em 0 0 currentcolor;
        }
      }
   


  @media(max-width:860px){
    html{
      font-size: 55.2%;
    }
  }
  @media(max-width:690px){
    html{
      font-size: 50%;
    }
  }
  @media(max-width:600px){
    html{
      font-size: 40%;
    }
  }
  @media(max-width:500px){
    html{
      font-size: 30%;
    }
  }
`;
