import React,{useState} from 'react'
import {TextField ,TextareaAutosize} from "@material-ui/core"
import "./Createnotes.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';

function CreateNotes(props) {
    const [addnote, setaddNote] = useState({
        title :"",
        content :""
    })
    const addnotes=(e)=>
    {
        const {name,value} =e.target;
        console.log(name)
        setaddNote((olddata)=>{
            return{
                ...olddata,
                [name] : value
            }
        })

    }
    const createnotebtn=(e)=>{

        e.preventDefault();
        props.passNote(addnote)
        
        setaddNote({
            title :"",
            content :""

        })
             

    }
    return (
        <div className="createnotes">
            
            <form className="createnotes_inp">
                <div className="createnotes_inp1">
                 <TextField   
                 onChange={addnotes}
                 value={addnote.title}
                 name="title"
                 className="createnotes_tex"
                  id="standard-basic" 
                  label="Title"
                  autoComplete="false"/>
                 <TextareaAutosize  
                  onChange={addnotes}
                  name="content"
                  value={addnote.content}
                 className="createnotes_text"
                  aria-label="Notes" rows="3" placeholder="Enter your notes here.." />
                 </div>
                
                 <button 
                 onClick={createnotebtn}
                 className="createnotes_btn">
                 <AddCircleIcon></AddCircleIcon>
                 </button>
           </form>
            
        </div>

         
     
    )
}

export default CreateNotes
