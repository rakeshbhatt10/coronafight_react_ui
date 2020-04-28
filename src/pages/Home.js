import React from "react";

import Stats from "../components/Stats";
import IndiaStateMap from "../components/IndiaStateMap";
import StateWiseCasesChart from "../components/charts/StateWiseCasesChart";
import IndianTimeSeriesWrapper from "../components/charts/timeSeriesCharts/IndianTimeSeriesWrapper";
import LastUpdatedIndicator from "../components/LastUpdatedIndicator";
import RaceChart from "../components/raceChart/RaceChart";
import StatewiseTable from "../components/StateWise/StatewiseTable";
import SingUp from '../components/SignUp';


const Home = props => {
return <>
        <div className="container">
          <LastUpdatedIndicator
            lastUpdated={props.total.lastUpdated}
          ></LastUpdatedIndicator>
          <Stats
            dayChange={props.dayChange}
            total={props.total}
            tested={props.tested}
          ></Stats>
          <div className="row">
            <div className="col-6">
              {props.isLoading ? null : <IndiaStateMap
                dayChange={props.dayChange}
                total={props.total}
                isDarkTheme={props.theme==='dark'}
                statewise={props.statewise}
                isMobile={props.isMobile}
              ></IndiaStateMap>}
            </div>
            <div className="col-6">
              <SingUp />
            </div>
          </div>
        </div>
      </>
};

export default Home;
