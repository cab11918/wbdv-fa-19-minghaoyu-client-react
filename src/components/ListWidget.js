import React from 'react'

const ListWidget = ({widget}) =>
    <div>


        { widget.type === "HEADING" && <label className="h4">Heading widget</label>}



        <form>
            <div className="form-group">
                <input className="form-control"

                       placeholder={widget.items}/>

            </div>
            <div className="form-group">
                <select className="form-control">
                    <option>Unordered list</option>
                    <option>Ordered list</option>

                </select>

            </div>

            <div className="form-group">
                <input className="form-control"

                       placeholder="Widget name"/>

            </div>

        </form>

        <h3>Preview</h3>
        -Nodes
        -Attributes
        -Tag names
        -IDs
        -Styles
        -Classes

    </div>

export default ListWidget
