import React from 'react';
import NewNoteInput from './components/NewNoteInput';
import { NotesState } from './store/notesReducer';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { addNote } from './store/actions';

function App() {
  const notes = useAppSelector<NotesState>((state) => state.notes);
  const dispatch = useAppDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <div>
        <NewNoteInput addNote={onAddNote} />
        <hr />
        <ul>
          {notes.notes.map((note: string) => {
            return <li key={note}>{note}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
