"use client"
import { NotesContext } from "@/context/NotesContext";
import Header from "./Header";
import { useState } from "react";
import NoteCard from "./NoteCard";
import { http } from "@/lib/fetch";
import { useRouter } from "next/navigation";

const NoteContent = ({notes}) => {
    const route = useRouter()
    const addNote = async () => {
        const newNotes = {
            content: 'Write Something...',
            user: 'mrenaldyr'
        }
        await http("POST",newNotes)
        route.refresh()
    }

    const editNote = async (id,newContent) => {
        const updatedNotes = {
            content: newContent
        }
        await http("PATCH",updatedNotes,id)
        route.refresh()
    }

    const deleteNote = async (id) => {
        await http("DELETE",null,id)
        route.refresh()
    }

    return (
        <NotesContext.Provider value={{addNote,editNote,deleteNote}}>
            <Header/>
            <div className="grid grid-cols-2 mt-8 gap-8">
                {
                    notes.map((note,index) => {
                        return <NoteCard index={index} content={note.content} id={note.id} key={index}/>
                    })
                }
            </div>
        </NotesContext.Provider>
    );
}

export default NoteContent;
