import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import HttpCall from './httpCall'; 

import { 
    giphyActionType,
    getContentsSuccess
} from './action'; 

polyfill();

function* getContentsSaga({payload}) {
    try { 
        const result = yield call(HttpCall.httpGetContents,payload); 
 
        if(result.success && result.success.data && result.success.data.meta && result.success.data.meta.status == 200)
            yield put(getContentsSuccess(result.success.data))

    } catch (err) { 
        console.log(err)
    }
}

export default function* rootSaga() {  
    yield all([takeEvery(giphyActionType.GET_CONTENTS, getContentsSaga)]);
}
