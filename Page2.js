import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import Twitter from "./Twitter";
import Github from "./Github";

const GlobalStyle = createGlobalStyle`
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
`;

const P = styled.p`
  font-size: 18px;
  line-height: 28px;
`;

const Link = styled.a`
  font-size: 18px;
  line-height: 28px;
  color: darkorange;
`;

function Main() {
  return (
    <main style={{width: "600px"}}>
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

function Page(){
  return(
    <div id="container">
      <Reset />
      <GlobalStyle />
      <Header>
        <H2>Kohei Yoneda</H2>
        <button>toggle</button>
      </Header>
      <Main />
      <Footer />
    </div>
  )
}

export default Page;