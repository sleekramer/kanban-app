import storage from '../../lib/storage';
import persist from '../../lib/persist';
import NoteStore from '../../stores/NoteStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);

  persist(alt, storage(localStorage), 'app');
};
