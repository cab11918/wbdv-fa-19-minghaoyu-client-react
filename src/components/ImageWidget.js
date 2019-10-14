import React from 'react'

const ImageWidget = ({widget}) =>
    <div>


   <label className="h4">Image widget</label>



        <form>
            <div className="form-group">
                <input className="form-control"

                       placeholder={widget.src}/>

            </div>


            <div className="form-group">
                <input className="form-control"

                       placeholder="Widget name"/>

            </div>

        </form>

        <h3>Preview</h3>
        <img src={"https://picsum.photos/200"} alt="ImageWidget preview"/>

    </div>

export default ImageWidget
