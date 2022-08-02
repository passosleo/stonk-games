import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Layout from "../layout";
import { Home } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
