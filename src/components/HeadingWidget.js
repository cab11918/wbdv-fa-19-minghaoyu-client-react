import React from 'react'

const HeadingWidget = ({widget}) =>
    <div>


        { widget.type === "HEADING" && <label className="h4">Heading widget</label>}



        <form>
            <div className="form-group">
                <input className="form-control"

                       placeholder={widget.text}/>

            </div>
            <div className="form-group">
                <select className="form-control">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                    <option>Heading 5</option>
                    <option>Heading 6</option>

                </select>

            </div>

            <div className="form-group">
                <input className="form-control"

                       placeholder="Widget name"/>

            </div>

        </form>

        <h3>Preview</h3>
        {widget.size === 1 && <h1>{widget.text}</h1>}
        {widget.size === 2 && <h2>{widget.text}</h2>}
        {widget.size === 3 && <h3>{widget.text}</h3>}
        {widget.size === 4 && <h4>{widget.text}</h4>}
        {widget.size === 5 && <h5>{widget.text}</h5>}
        {widget.size === 6 && <h6>{widget.text}</h6>}

    </div>

export default HeadingWidget
