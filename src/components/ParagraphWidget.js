import React from 'react'

const ParagraphWidget = ({widget}) =>
    <div>


      { widget.type === "HEADING" && <label className="h4">Heading widget</label>}



      <form>
        <div className="form-group">
          <input className="form-control"

                 placeholder={widget.text}/>

        </div>


        <div className="form-group">
          <input className="form-control"

                 placeholder="Widget name"/>

        </div>

      </form>

      <h3>Preview</h3>
      {widget.text}

    </div>

export default ParagraphWidget
