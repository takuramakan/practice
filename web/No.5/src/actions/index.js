import axios from 'axios'

//reducerでも使うため、定数定義
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//ActionCreater:アクションを返す関数
export const readEvents = () => async dispatch =>{
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({type: READ_EVENTS, response})
}

//ActionCreater:アクションを返す関数
export const postEvent = values => async dispatch =>{
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
    dispatch({type: CREATE_EVENT, response})
}