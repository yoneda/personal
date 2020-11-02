import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import request from "superagent";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";

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

function Home() {
  return (
    <HomeBox>
      <section>
        <h2>Kohei Yoneda</h2>
        <p>関西に住むフリーランスエンジニア。React を書くのが好きです。</p>
        <p>趣味は料理やお菓子作りなど。最近は日記アプリを作っています。</p>
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
