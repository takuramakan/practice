//reducerでも使うため、定数定義
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//ActionCreater:アクションを返す関数
export const increment = () => ({
        type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})

