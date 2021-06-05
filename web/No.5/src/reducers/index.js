//各reducerを結合するためのreducer

import { combineReducers } from 'redux'　//reactが用意している各reducerを結合する関数
import count from './count'

export default combineReducers ({count})
//↓複数のreducerがある場合
//export default combineReducers ({foo, bar, baz})