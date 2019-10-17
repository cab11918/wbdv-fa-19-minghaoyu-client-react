import React from 'react'

class LinkWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: this.props.widget.href,
      title: this.props.widget.title
    }
  }

  newLinkChanged = (event) =>

      this.setState({
        preview: event.target.value

      })

  newTitleChanged = (event) =>

      this.setState({
        title: event.target.value

      })

  render() {
    return (
        <div>


          <label className="h4">Link widget</label>

          <select
              className="selectPicker"
              onChange={(event) => this.props.handleChange(event,
                  this.props.widget.id)}>
            <option value="Heading">Heading</option>
            <option value="Paragraph">Paragraph</option>
            <option value="List">List</option>
            <option value="Image">Image</option>
            <option selected value="Link">Link</option>


          </select>


          <form>
            <div className="form-group">
              <input className="form-control"

                     placeholder="Link URL"
                     onChange={this.newLinkChanged}/>

            </div>

            <div className="form-group">
              <input className="form-control"
                     placeholder="Link text"
                     onChange={this.newTitleChanged}

              />

            </div>


            <div className="form-group">
              <input className="form-control"

                     placeholder="Widget name"
              />

            </div>

          </form>

          <h3>Preview</h3>

          <a href={this.state.preview}>
            {this.state.title}

          </a>


        </div>
    )
  }
}

export default LinkWidget
