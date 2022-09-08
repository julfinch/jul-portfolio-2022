import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <title>Jul Danreb Lactao</title>
    <meta name="description" content="Portfolio Website of Jul Danreb Lactao using React JS"/>
  </>
)

const loader = () => 
    <div className="loading"></div>;
  
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"), 
  loading: loader,
});

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;
