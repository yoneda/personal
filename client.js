import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Twitter from "./Twitter";
import Github from "./Github";

const H2 = styled.h2`
  font-family: Arial;
  font-size: 2em;
  font-weight: 500;
  line-height: 2em;
`;

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
      props.theme.theme === "light" ? "white" : "black"};
    color: ${(props) => (props.theme.theme === "light" ? "black" : "white")};
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    line-height: 1.5em;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:visited{
    color: crimson;
  }

  section{
    width: 600px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const SwitchButton = styled.button`
  width: 30px;
  height: 30px;
`;

function Main() {
  return (
    <main>
      <section>
        <p>
          兵庫県に住むソフトウェアエンジニア。React と Swift
          のコードをよく書いています。最近は<a href="">簡単日記</a>
          を作っています。
        </p>
        <p>
          2020年には<a href="">野菜スペシャリスト</a>
          の資格を取得。野菜の正しい知識を世の中に広める活動を行っている。
        </p>
      </section>
      <section>
        <Twitter />
        <Github />
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <hr />
      <p>
        ソースコードは<a href="">こちら</a>
      </p>
    </footer>
  );
}

function Page() {
  const [theme, setTheme] = useState("light");
  const onClick = () => {
    setTheme(theme === "light" ? "back" : "light");
  };
  const label = theme === "light" ? "昼" : "夜";
  return (
    <div id="container">
      {/* ThemeProvider.theme must be an object */}
      <ThemeProvider theme={{ theme }}>
        <Reset />
        <GlobalStyle />
        <Header>
          <H2>Kohei Yoneda</H2>
          <SwitchButton onClick={onClick}>{label}</SwitchButton>
        </Header>
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("app"));
