import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons/faArrowAltCircleUp";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons/faArrowAltCircleDown";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import Form from 'react-bootstrap/Form';

const WidgetListComponent = ({widgets, addWidget, deleteWidget}) =>

    <div>


      <ul className="list-group">

        {
          widgets.map(widget =>

              <li className="list-group-item">
                <div className="row float-right">

                  <button className="btn btn-warning">
                    <FontAwesomeIcon icon={faArrowAltCircleUp}/>
                  </button>
                  <button className="btn btn-warning">
                    <FontAwesomeIcon icon={faArrowAltCircleDown}/>
                  </button>
                  <select className="selectPicker">
                    <option>{widget.type}</option>

                  </select>
                  <button className="btn btn-danger float-right"
                          onClick={() => deleteWidget(widget.id)}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                  </button>
                </div>
                {widget.type === "HEADING" && <HeadingWidget widget={widget}/>}


                {widget.type === "LIST" && <ListWidget widget={widget}/>}

                {widget.type === "PARAGRAPH" && <ParagraphWidget
                    widget={widget}/>}
                {widget.type === "LINK" && <LinkWidget widget={widget}/>}
                {widget.type === "IMAGE" && <ImageWidget widget={widget}/>}

              </li>
          )
        }
      </ul>
      <button className="btn btn-success btn-lg float-right"
              onClick={addWidget}>
        <FontAwesomeIcon icon={faPlusCircle}/></button>

      <button className="btn btn-warning btn-lg float-right"
      >


        <Form.Check
            type="switch"
            id="custom-switch"
            label="Preview"
        />

      </button>
      <button className="btn btn-success btn-lg float-right">
        Save
      </button>


    </div>

export default WidgetListComponent;