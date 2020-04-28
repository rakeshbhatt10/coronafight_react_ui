import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

const Routes = (props) => {
  return <Switch>
    <Route exact path="/">
      <Home
        isLoading={props.isLoading}
        dayChange={props.dayChange}
        total={props.total}
        tested={props.tested}
        statewise={props.statewise}
        statewiseTestingData = {props.statewiseTestingData}
        isMobile={props.isMobile}
        ageGroup={props.ageGroup}
        nationality={props.nationality}
        gender={props.gender}
        theme={props.theme}
        hospitalizationStatus={props.hospitalizationStatus}
      ></Home>
    </Route>
  </Switch>
}

export default Routes;