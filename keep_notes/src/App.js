import React,{useState} from 'react';
import './App.css';
import Header from "./Header"
import CreateNotes from "./CreateNotes"
import Note from "./Note"

function App() {
  

  const [createnote, setcreatenote] = useState([]);
  const CreateNote=(note)=>
  {
    setcreatenote((olddata)=>(
      [...olddata ,note]
    ))

  }
  const deleteitems=(id)=>
  {
    setcreatenote((olddata)=>{
      return(
        olddata.filter((note,index)=>(
          index !== id
 
       ))

      )
     
    })

  }
  return (
   <>
   <Header/>
   <CreateNotes  passNote={CreateNote}/>
   
   {
     createnote.map((note,index)=>{
       return(
         <Note 

         id={index}
         key={index}
         title ={note.title}
         content={note.content}
         deletenote={deleteitems}
      
         
         />
       )
     })
   }
 

   
   
   </>
  );
}

export default App;
