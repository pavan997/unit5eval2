import {GET_CHAR_ALL_REQ,GET_CHAR_ALL_SUCC,GET_CHAR_ALL_ERR,GET_S_CHAR_REQ,GET_S_CHAR_SUCC,GET_S_CHAR_ERR} from '../actionType/actionType';

export const getCharAllReq = () =>{
    return {
        type: GET_CHAR_ALL_REQ
    }
}

export const getCharAllSucc = (data) =>{
    return {
        type: GET_CHAR_ALL_SUCC,
        payload: data
    }
}

export const getCharAllErr = (error) =>{
    return {
        type: GET_CHAR_ALL_ERR,
        payload: error
    }
}

export const getSCharReq = () =>{
    return {
        type: GET_S_CHAR_REQ,
    }
}

export const getSCharSucc = (data) =>{
    return {
        type: GET_S_CHAR_SUCC,
        payload:data
    }
}

export const getSCharReq = (error) =>{
    return {
        type: GET_S_CHAR_REQ,
        payload:error
    }
}
