import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

class CourseCard extends React.Component {
  render() {
    return (
        <div>
          {
            this.props.courses.map(course =>
                <div className="card col-xs-12 col-md-4 col-lg-2">


                  <img className="card-img-top"
                       src="https://picsum.photos/300/200"/>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to="/courseEditor">


                        {course.title}


                      </Link>
                    </h5>
                    <p className="card-text">{course.lastModified}
                      &nbsp;
                      {course.ownedBy}</p>
                    <button className={"btn btn-outline-secondary float-right"}
                            onClick={() => {
                              this.props.handleDelete(course.id)
                            }}>
                      <FontAwesomeIcon icon={faTimes}/>

                    </button>
                  </div>
                </div>)

          }
        </div>
    )
  }
}

export default CourseCard

// export default class CourseCard extends React.Component {
//   render() {
//     return (
//         <div className="card" styles={{width: '18rem'}}>
//           <img className="card-img-top"
//                src="https://picsum.photos/300/200"/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Card text.</p>
//             <button className={"btn btn-outline-secondary float-right"}>
//               <FontAwesomeIcon icon={faTimes}/>
//
//             </button>
//           </div>
//         </div>
//     )
//   }
// }