import React from 'react'

import CourseTable from "../containers/CourseTable";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CourseGrid from "../containers/CourseGrid";
import CourseEditor from "../containers/CourseEditor";
import WidgetList from "../components/WidgetList";
import WidgetListContainer from "../containers/WidgetListContainer";
import WidgetReducer from "../reducers/WidgetReducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'





class WhiteBoard extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <Router>



          <div className="container-fluid">

            <div className="row">

              <div className="col-12">

                <Route path="/courseEditor/:courseId" render={(props) => <CourseEditor {...props}/>}/>

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

}

export default WhiteBoard