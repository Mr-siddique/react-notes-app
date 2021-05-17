import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

// import Note from "./Note";
const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const [expand,checkExpand]=useState(false);
    const inputEvent = (e) => {
        const {name,value}=e.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }
    const addNote=()=>{
    props.passNote(note);
    setNote({
        title:"",content:""
    })
    }
    const expandIt=()=>{
        checkExpand(true);
    }
    const shrink=()=>{
        checkExpand(false);
        setNote({
            title:"",content:""
        })
    }
    return (
        <div className="addNote" onDoubleClick={shrink}>
            <form action="get">
                {expand?<input type="text" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off" name="title" />:null}
                <textarea name="note" id="" cols="" rows="" placeholder="Write a Note..." name="content" value={note.content} onChange={inputEvent} onClick={expandIt}
                ></textarea>
                {expand? <Button className="button-container" onClick={addNote}>
                    <AddIcon className="addBtn"></AddIcon>
                </Button>:null}
            </form>
        </div>
    )
}
export default CreateNote;