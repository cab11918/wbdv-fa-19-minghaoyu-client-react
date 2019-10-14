import React from 'react'

const LinkWidget = ({widget}) =>
    <div>


      <label className="h4">List widget</label>



      <form>
        <div className="form-group">
          <input className="form-control"

                 placeholder={widget.href}/>

        </div>

        <div className="form-group">
          <input className="form-control"

                 placeholder="Link text"/>

        </div>


        <div className="form-group">
          <input className="form-control"

                 placeholder="Widget name"/>

        </div>

      </form>

      <h3>Preview</h3>

      <a href={widget.href}>
        Link text

      </a>


    </div>

export default LinkWidget
