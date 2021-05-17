import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const getItemsFromLocalStorage = () => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes == null)
        return [];
    return notes;
}
const App = () => {
    const [items, setItem] = useState(getItemsFromLocalStorage());
    const addNote = (note) => {
        const title = note.title;
        const content = note.content;
        if (!title.length || !content.length)
            alert("both fields are required");
        else {
            setItem((prevItem) => {
                const newNotes = [...prevItem, note];
                localStorage.setItem("notes", JSON.stringify(newNotes));
                return newNotes;
            });
        }
    }
    const deleteItm = (noteId) => {
        setItem((prevItem) => {
            const newNotes = prevItem.filter((item, index) => index != noteId);
            localStorage.setItem("notes", JSON.stringify(newNotes));
            return newNotes;
        })
    }
    return (
        <div className="container">
            <Header />
            <CreateNote passNote={addNote} />
            <div className="savedNotesContainer">
                {
                    items.map((val, index) => {
                        return <Note
                            id={index}
                            key={index}
                            value={val}
                            deleteItem={deleteItm}
                        />
                    })
                }
            </div>
            <Footer />
        </div>
    )
}
export default App;