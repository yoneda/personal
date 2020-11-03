import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import request from "superagent";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import Twitter from "./Twitter";
import Github from "./Github";

const StatusGood = styled.span`
  color: green;
`;

const StatusBad = styled.span`
  color: red;
`;

const Box = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 400px;
`;

const HomeBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

function Home() {
  return (
    <HomeBox>
      <section>
        <H2>Kohei Yoneda</H2>
        <p>関西に住むフリーランスエンジニア。React を書くのが好きです。</p>
        <p>
          趣味は料理やお菓子作りなど。最近は
          <a href="https://yoneda.fun">日記アプリ</a>
          を作っています。
        </p>
        <IconBox>
          <Twitter />
        </IconBox>
        <IconBox>
          <Github />
        </IconBox>
        <p>ホーム | プロジェクト | 記事</p>
      </section>
    </HomeBox>
  );
}

function About() {
  const [name, setName] = useState("");
  useEffect(() => {
    const url = "https://reqres.in/api/users/1";
    request
      .get(url)
      .then((res) => res.body)
      .then((body) => {
        setName(body.data.last_name);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div>This is about page</div>
      {name && <div>{name}</div>}
    </div>
  );
}

function Works() {
  return (
    <div>
      <Nav />
      <div>This is works page</div>
      <p>Please check my awesome works.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Nav />
      <div>This is contact page</div>
      <p>Mail to me.</p>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="./../about">about</Link> |{" "}
      <Link to="./../works">works</Link> |{" "}
      <Link to="./../contact">contant</Link> | <Link to="./../app">app</Link>
    </nav>
  );
}

const GlobalStyle = createGlobalStyle`
  
  body{
    background-color: whitesmoke;
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    line-height: 1.5em;
  }

  a:visited{
    color: crimson;
  }
`;

function App() {
  return (
    <Fragment>
      <Reset />
      <GlobalStyle />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Works path="/works" />
        <Contact path="/contact" />
      </Router>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
