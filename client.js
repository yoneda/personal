import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import request from "superagent";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Twitter from "./Twitter";
import Github from "./Github";

const IconBox = styled.span`
  cursor: pointer;
  transition: 0.3s;
  margin-left: 5px;
  &:hover {
    color: crimson;
  }
`;

const H2 = styled.h2`
  font-family: Arial;
  font-size: 2em;
  font-weight: 500;
  line-height: 2em;
`;

const GlobalStyle = createGlobalStyle`
  body{
    background-color: whitesmoke;
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

function Header() {
  return (
    <header>
      <H2>Kohei Yoneda</H2>
      <div>Toggle</div>
    </header>
  );
}

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
        <IconBox>
          <Twitter />
        </IconBox>
        <IconBox>
          <Github />
        </IconBox>
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

function App() {
  return (
    <div id="container">
      <Reset />
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
