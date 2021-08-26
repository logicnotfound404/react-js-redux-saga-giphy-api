export const giphyActionType = { 
    GET_CONTENTS : 'GET_CONTENTS',
    GET_CONTENTS_SUCCESS : 'GET_CONTENTS_SUCCESS',

    GET_CONTENTS_IRONMAN : 'GET_CONTENTS_IRONMAN',
    GET_CONTENTS_IRONMAN_SUCCESS : 'GET_CONTENTS_IRONMAN_SUCCESS'
};

export function getContents(payload){
    return {
        type : giphyActionType.GET_CONTENTS,
        payload
    }
}

export function getContentsSuccess(payload){ 
    return {
        type : giphyActionType.GET_CONTENTS_SUCCESS,
        payload
    }
}


// IRONMAN
export function getContentsIronMan(payload){
    return {
        type : giphyActionType.GET_CONTENTS_IRONMAN,
        payload
    }
}

export function getContentsIronManSuccess(payload){ 
    return {
        type : giphyActionType.GET_CONTENTS_IRONMAN_SUCCESS,
        payload
    }
}
 
 
 