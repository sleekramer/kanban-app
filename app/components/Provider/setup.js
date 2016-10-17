import storage from '../../lib/storage';
import persist from '../../lib/persist';
import NoteStore from '../../stores/NoteStore';
import LaneStore from '../../stores/LaneStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LaneStore', LaneStore);
  persist(alt, storage(localStorage), 'app');
};
