import axios from 'axios'

//reducerでも使うため、定数定義
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//ActionCreater:アクションを返す関数
export const readEvents = () => async dispatch =>{
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({type: READ_EVENTS, response})
}

