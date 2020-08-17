import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { types } from '../types/types';

export const startNewEntry = (type, title, info, file) => {
  return async (dispatch) => {
    const fileUrl = await fileUpload(file);

    const newEntry = {
      type,
      title,
      info,
      url: fileUrl,
    };

    const doc = await db.collection('entries').add(newEntry);
  };
};

export const getEntryDb = () => {
  return async (dispatch) => {
    const entries = [];

    await db.collection('entries').onSnapshot((snapshots) => {
      snapshots.forEach((snap) => {
        const { type, title, info, url } = snap.data();

        const id = snap.id;

        const newEntry = {
          id,
          type,
          title,
          info,
          url,
        };

        entries.push(newEntry);
      });
      dispatch(addNewEntry(entries));
    });
  };
};

export const addNewEntry = (entry) => ({
  type: types.newEntry,
  payload: {
    ...entry,
  },
});
