import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Twitter from "./Twitter";
import Github from "./Github";
import Instagram from "./Instagram";

const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${(props) =>
      props.theme.theme === "light" ? "white" : "#242424"};
  }
`;

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 600px;
`;

const H2 = styled.h2`
  font-size: 36px;
  color: ${(props) => (props.theme.theme === "light" ? "black" : "white")};
`;

const P = styled.p`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${(props) => (props.theme.theme === "light" ? "black" : "white")};
`;

const Link = styled.a`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 1px;
  color: darkorange;
`;

function Main() {
  return (
    <main style={{ width: "600px" }}>
      <section>
        <P>
          兵庫県に住むソフトウェアエンジニア。React と Swift
          のコードをよく書いています。最近は<Link href="">簡単日記</Link>
          を作っています。
        </P>
        <P>
          2020年には<Link href="">野菜スペシャリスト</Link>
          の資格を取得。野菜の正しい知識を世の中に広める活動を行っている。
        </P>
      </section>
      <section>
        <Twitter />
        <Github />
        <Instagram />
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <hr />
      <P>
        ソースコードは<Link href="">こちら</Link>
      </P>
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
          <button onClick={onClick}>{label}</button>
        </Header>
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Page;
