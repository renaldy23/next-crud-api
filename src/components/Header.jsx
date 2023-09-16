import { NotesContext } from '@/context/NotesContext';
import { Plus } from 'lucide-react'
import { useContext } from 'react';

const Header = () => {
    const { addNote } = useContext(NotesContext)

    return (
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">WriteMe.</h1>
            <button onClick={addNote} className='p-2 rounded-full bg-violet-500 text-white'>
                <Plus size={18}/>
            </button>
        </div>
    );
}

export default Header;
