import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Switch from "react-input-switch";
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
  #container{
    width: 600px;
  }
  header{
    margin-bottom: 1rem;
  }
  section{
    margin-bottom: 0.5rem;
  }
  svg{
    margin-right: 0.5rem;
  }
`;

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 2rem;
  font-family: 'Lato';
  color: ${(props) => (props.theme.theme === "light" ? "black" : "white")};
`;

const P = styled.p`
  font-size: 1.1rem;
  line-height: 1.75rem;
  letter-spacing: 0rem;
  color: ${(props) => (props.theme.theme === "light" ? "black" : "white")};
`;

const Link = styled.a`
  font-size: 1.1rem;
  line-height: 1.75rem;
  letter-spacing: 0rem;
  color: darkorange;
`;

function Main() {
  return (
    <main>
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

function Page(props) {
  const { theme, setTheme } = props;
  return (
    <div id="container">
      <Reset />
      <GlobalStyle />
      <Header>
        <H2>Kohei Yoneda</H2>
        <Switch
          styles={{
            trackChecked: { backgroundColor: "darkorange" },
          }}
          on="black"
          off="light"
          value={theme}
          onChange={setTheme}
        />
      </Header>
      <Main />
      <Footer />
    </div>
  );
}

export default function () {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={{ theme }}>
      {/* ThemeProvider.theme must be an object */}
      <Page {...{ theme, setTheme }} />
    </ThemeProvider>
  );
}
