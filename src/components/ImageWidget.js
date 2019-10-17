import React from 'react'

class ImageWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: "",
    }

  }

  newImageChanged = (event) =>

      this.setState({
        preview: event.target.value

      })

  render() {
    return (
        <div>


          <label className="h4">Image widget</label>

          <select
              className="selectPicker"
              onChange={(event) => this.props.handleChange(event,
                  this.props.widget.id)}>
            <option value="Heading">Heading</option>
            <option value="Paragraph">Paragraph</option>
            <option value="List">List</option>
            <option selected value="Image">Image</option>
            <option value="Link">Link</option>


          </select>


          <form>
            <div className="form-group">
              <input className="form-control"

                     placeholder="Image URL"
                    onChange={this.newImageChanged}/>

            </div>


            <div className="form-group">
              <input className="form-control"

                     placeholder="Widget name"/>

            </div>

          </form>

          <h3>Preview</h3>
          <img src={this.state.preview} alt="Image preview"/>

        </div>
    )
  }
}

export default ImageWidget
