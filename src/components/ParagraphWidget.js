import React from 'react'

class ParagraphWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: "",
    }

  }

  newParagraphChanged = (event) =>

      this.setState({
        preview: event.target.value

      })

  render() {
    return (
        <div>
          <label className="h4">Paragraph widget</label>

          <select
              className="selectPicker"
              onChange={(event) => this.props.handleChange(event,
                  this.props.widget.id)}>
            <option value="Heading">Heading</option>
            <option selected value="Paragraph">Paragraph</option>
            <option value="List">List</option>
            <option value="Image">Image</option>
            <option value="Link">Link</option>


          </select>


          <form>
            <div className="form-group">
              <input className="form-control"
                     onChange={this.newParagraphChanged}

                     placeholder="Paragraph text"/>

            </div>


            <div className="form-group">
              <input className="form-control"

                     placeholder="Widget name"/>

            </div>

          </form>

          <h3>Preview</h3>
          {this.state.preview}

        </div>
    )
  }

}

export default ParagraphWidget

