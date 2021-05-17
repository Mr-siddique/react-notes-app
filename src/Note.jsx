import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note = (props) => {
    const deleteItem = () => {
      props.deleteItem(props.id);
    }
    return (
            <div className="singleNote">
                <h3>{props.value.title}</h3>
                <hr></hr>
                <p>{props.value.content}</p>
                <button onClick={deleteItem}>
                   <DeleteOutlineIcon/> 
                </button>
            </div>
    )
}
export default Note;