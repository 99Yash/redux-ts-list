import React from 'react';
import { NewNoteInputProps } from '../interfaces/NewNote.interface';

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState('');

  const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNote = () => {
    addNote(note);
    setNote('');
  };

  return (
    <div>
      <input
        onChange={updateNote}
        type="text"
        value={note}
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNote}>Add Note</button>
    </div>
  );
};

export default NewNoteInput;
