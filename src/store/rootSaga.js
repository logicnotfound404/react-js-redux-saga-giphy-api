import { all } from 'redux-saga/effects'; 
import GiphySaga from './giphy/saga';

export default function* rootSaga() {
    yield all([  
        GiphySaga() 
    ]);
}
