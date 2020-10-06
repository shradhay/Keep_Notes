import React from 'react'
import "./Note.css"
import DeleteIcon from '@material-ui/icons/Delete';
function Note(props) {
    const removenote=()=>{
        props.deletenote(props.id)
    }
    return (


        <div className="flex_container">
            <div className="notes wrap" >
         
              <div className="notes_info">
            <div className="notes_title">
            <h1>{props.title}</h1>
          </div>
           <div className="notes_inp">
                <p >{props.content} </p>
           </div>
          <button onClick={removenote}>
             <DeleteIcon></DeleteIcon>

          </button>
         </div>
     </div>

        </div>

        
    )
}

export default Note
