import React from 'react'
import CourseRow from "../components/CourseRow";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTh, faSortAlphaDown} from '@fortawesome/free-solid-svg-icons'
import {Route} from 'react-router-dom';
import CourseGrid from "./CourseGrid";
import {Link} from 'react-router-dom'
import CourseService from "../services/CourseService"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

class CourseTable extends React.Component {

  constructor(props) {
    super(props);
    this.CourseService = CourseService.getInstance()
    this.state = {
      course: {
        title: "New Course Title"
      },
      courses: this.CourseService.findAllCourses(),

    }

  }

  newCourseChanged = (event) =>
      this.setState({
        course: {
          title: event.target.value
        }
      })

  handleDelete = id => {

    this.CourseService.deleteCourse(id)
    this.setState({courses: this.CourseService.courses});
  };

  createCourse = () => {
    this.setState(prevState => {
      const course = {
        title: prevState.course.title,
        id: (new Date().getTime()),
        modules:[

          {"lessons":[
              {
                "topics":["1"],
              }
            ]}
        ],
      };
      this.CourseService.createCourse(course)
      this.setState({courses: this.CourseService.courses});

    })

    return {
      courses: this.CourseService.findAllCourses()
    }

  };

  render() {
    return (
        <div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <a className="navbar-brand"
               href="">

              Course Manager
            </a>
            <div className="collapse navbar-collapse"
                 id="navbarSupportedContent">


              <div className="row">
                <input
                    onChange={this.newCourseChanged}
                    className="form-control col-5"
                    placeholder={this.state.course.title} aria-label="Search">

                </input>
                <button onClick={this.createCourse} className="btn btn-success">

                  <FontAwesomeIcon icon={faPlusCircle}/>
                </button>


              </div>


            </div>


          </nav>

          <Route path="/courseGrid" component={CourseGrid}/>

          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th>
                Title
              </th>
              <th>
                Owned by
              </th>
              <th>
                Last modified by me
              </th>

              <th>


                <button className={"btn btn-outline-light float-right"}>

                  <FontAwesomeIcon icon={faSortAlphaDown}/>

                </button>


                <Link to="/courseGrid">


                  <button className={"btn btn-outline-light float-right"}>

                    <FontAwesomeIcon icon={faTh}/>

                  </button>

                </Link>


              </th>
            </tr>
            </thead>


            <CourseRow
                courses={this.state.courses}
                handleDelete={this.handleDelete}
            />


          </table>
        </div>

    )
  }
}

export default CourseTable

