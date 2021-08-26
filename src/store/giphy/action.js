export const giphyActionType = { 
    GET_CONTENTS : 'GET_CONTENTS',
    GET_CONTENTS_SUCCESS : 'GET_CONTENTS_SUCCESS'
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
 
 