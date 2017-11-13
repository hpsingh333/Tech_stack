import {combinedReducer} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

console.log(SelectionReducer);
export default combinedReducer({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

