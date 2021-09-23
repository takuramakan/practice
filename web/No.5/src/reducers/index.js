//各reducerを結合するためのreducer
import { combineReducers } from 'redux'　//reactが用意している各reducerを結合する関数
import { reducer as form} from 'redux-form'
import events from './events'

export default combineReducers ({events,form})
//↓複数のreducerがある場合
//export default combineReducers ({foo, bar, baz})