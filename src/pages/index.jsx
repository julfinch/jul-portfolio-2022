import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";

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
