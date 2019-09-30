import React from 'react'

import NavBar from "./NavBar";
import CourseTable from "../containers/CourseTable";
import CourseGrid from "./CourseGrid";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class WhiteBoard extends React.Component {

  render() {

    return (
        <Router>
          <div>
            <NavBar/>
            <div className="row">

              <div className="col-12">
                <Route path="/courseTable" component={CourseTable}/>
              </div>


            </div>

            <div className="row">
              <Route path="/courseGrid" component={CourseGrid}/>


            </div>

            <div className="row">
              <div className="col-4">
                <h2>Modules</h2>asda
              </div>
              <div className="col-8">
                <h2>Lessons</h2>fdsfs
              </div>
            </div>
          </div>

        </Router>

    )

  }
}