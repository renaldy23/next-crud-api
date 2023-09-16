"use client"
import { NotesContext } from "@/context/NotesContext";
import { X } from "lucide-react";
import { useContext, useState } from "react";

const NoteCard = ({index,content, id}) => {
    const [editMode, setEditMode] = useState(false);
    const [dataContent, setDataContent] = useState(content);
    const {editNote,deleteNote} = useContext(NotesContext)

    const inActiveMode = () => {
        setEditMode(false)
        editNote(id,dataContent)
    }


    return (
        <div onBlur={inActiveMode} onClick={() => setEditMode(true)} className="p-4 bg-yellow-300 rounded-lg relative h-[300px]">
            <button onClick={() => deleteNote(id)} className="p-2 absolute text-white bg-red-500 bg-opacity-90 -top-4 -right-4 rounded-full">
                <X size={16}/>
            </button>
            {
                editMode ? <textarea onChange={() => setDataContent(event.target.value)} value={dataContent} className="w-full h-full resize-none bg-transparent"></textarea> : <p>{dataContent}</p>
            }
        </div>
    );
}

export default NoteCard;
