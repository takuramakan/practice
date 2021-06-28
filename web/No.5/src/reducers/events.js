//countの状態を保持するreducer
import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {
    switch(action.type) {
        case READ_EVENTS:
            /*action（データ取得結果）をidをキーにしたマップ状のデータで返却する  ↓こんな感じ
            1: {id: 1, token: "token123", title: "Let's have an event 1!", body: "This is the body for event 1.", created_at: "2021-06-22T12:04:22.747Z", …}
            */
            return _.mapKeys(action.response.data,'id')
        default:
            return state
    }
}