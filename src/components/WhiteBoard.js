import React from 'react'

import NavBar from "./NavBar"
import CourseTable from "../containers/CourseTable"

export default class WhiteBoard extends React.Component {
  render() {
    return (
        <div>
          <NavBar/>
          <div className="row">
            <div className="col-4">
              <h2>Modules</h2>asda
            </div>
            <div className="col-8">
              <h2>Lessons</h2>fdsfs
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <CourseTable/>
            </div>

          </div>
        </div>
    )
  }
}