const types = {
    GET_ENTRIES_ALL: 'GET_ENTRIES_ALL',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
};

export default types;
  
export const addEntryRedux = (payload) => {
    return { type: types.ADD_ENTRY, payload };
};
  
export const removeEntryRedux = (id) => {
    return { type: types.REMOVE_ENTRY, payload: { id } };
};
  
export const updateEntryRedux = (id, entry) => {
    return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const getAllEntries = () => {
    console.log('ACTION_GET_ALL_ENTRIES')
    return { type: types.GET_ENTRIES_ALL };
};

export const populateEntries = (entries) => {
    console.log('ACTION_POPULATE_ENTRIES: ', entries)
    return { type: types.POPULATE_ENTRIES, payload: entries }
}