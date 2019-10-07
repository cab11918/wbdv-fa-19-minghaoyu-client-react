import React from 'react'

import NavBar from "./NavBar";
import CourseTable from "../containers/CourseTable";
import CourseCard from "./CourseCard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CourseGrid from "../containers/CourseGrid";
import CourseEditor from "../containers/CourseEditor";

class WhiteBoard extends React.Component {


  render() {

    return (
        <Router>

          <div className="container-fluid">

            <div className="row">

              <div className="col-12">

                  <Route path="/courseEditor" component={CourseEditor}/>
                <Route path="/courseTable" component={CourseTable}/>
              </div>


            </div>

            <div className="row">

              <div className="col-12">

              <Route path="/courseGrid" component={CourseGrid}/>

              </div>


            </div>

          </div>

        </Router>

    )

  }

} export default WhiteBoard