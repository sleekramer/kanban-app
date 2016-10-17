import React from 'react';
import uuid from 'uuid';
import connect from '../lib/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

export default connect(() => ({}),{
  NoteActions, LaneActions
})(({lane, LaneActions, NoteActions, ...props}) => {
  const addNote = e => {
    e.stopPropagation();

    const noteId = uuid.v4();
    NoteActions.create({
      id: noteId,
      task: 'New Task'
    });
    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    });
  };

  const activateLaneEdit = () => {
    LaneActions.update({
      id: lane.id,
      editing: true
    });
  };

  const editName = name => {
    LaneActions.update({
      id: lane.id,
      name,
      editing: false
    });
  };

  const deleteLane = e => {
    e.stopPropagation();
    for (let noteId of lane.notes) {
      NoteActions.delete(noteId);
    }
    LaneActions.delete(lane.id);
  };

  return (
    <div className="lane-header" onClick={activateLaneEdit} {...props}>
      <div className="lane-add-note">
        <button onClick={addNote}>+</button>
      </div>
      <Editable value={lane.name} onEdit={editName} className="lane-name" editing={lane.editing}/>
      <div className="lane-delete">
        <button onClick={deleteLane}>x</button>
      </div>
    </div>
  );
})
