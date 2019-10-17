import React from 'react'
import HeadingWidget from "./HeadingWidget";

class ListWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: [],
      previous: []
    }

  }

  newListChanged = (event) =>

      this.setState({

            preview: event.target.value.split("\n"),
            previous: event.target.value.split("\n")

          }
      )

  sortPreview = (event) => {
    {
      event.target.value === "Ordered list" && this.setState({
        preview: this.state.preview.sort()
      })
    }
    {
      event.target.value === "Unordered list" && this.setState({
        preview: this.state.previous
      })
    }
  }

  render() {
    return (
        <div>


          <label className="h4">List widget</label>
          <select
              className="selectPicker"
              onChange={(event) => this.props.handleChange(event,
                  this.props.widget.id)}>
            <option value="Heading">Heading</option>
            <option value="Paragraph">Paragraph</option>
            <option selected value="List">List</option>
            <option value="Image">Image</option>
            <option value="Link">Link</option>


          </select>


          <form>
            <div className="form-group">
              <textarea className="form-control"

                        placeholder="Enter one list item per line"
                        rows="5" onChange={this.newListChanged}/>

            </div>
            <div className="form-group">
              <select className="form-control"
                      onChange={(event) => this.sortPreview(event)}>
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

          <ul>
            {this.state.preview.map(item => <li>
              {item}
            </li>)}
          </ul>


        </div>
    )
  }
}

export default ListWidget
