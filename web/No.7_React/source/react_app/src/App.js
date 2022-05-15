import React, { useState } from 'react';
import './App.css';

//合計値の計算
const total = (a)=> {
  let re = 0
  for(let i = 0; i <= a;i++){
    re += i
  }
  return re
}

//消費税計算
const tax = (a)=> {
  return Math.floor(a * 1.1)
}

//数値を計算し、メッセージを返す独自フック
const useCalc = (num=0, func = (a)=>{return a})=> {
  const [msg, setMSg] = useState(null)

  const setValue = (p)=> {
    let res = func(p)
    setMSg(<p className='h5'>※{p}の結果は、{res}です。</p>)
  }

  return [msg, setValue]
}

//デフォルトのコンポーネント
function PlainMessage(props){
  const [msg, setCalc] = useCalc()

  const onChange = (e)=> {
    setCalc(e.target.value)
  }

  return <div className='p-3 h5'>
    <h5>{msg}</h5>
    <input type='number' onChange={onChange} className='form-control'></input>
  </div>
}

//合計計算コンポーネント
function AlertMessage(props){
  const [msg, setCalc] = useCalc(0,total)

  const onChange = (e)=> {
    setCalc(e.target.value)
  }
  return <div className='alert alert-primary h5 text-primary'>
    <h5>{msg}</h5>
    <input type='number' onChange={onChange} min='0' max='10000' className='form-control'></input>
  </div>
}

//消費税計算コンポーネント
function CardMessage(props){
  const [msg, setCalc] = useCalc(0,tax)

  const onChange = (e)=> {
    setCalc(e.target.value)
  }
  return <div className='card p-3 h5 border-primary'>
    <h5>{msg}</h5>
    <input type='range' onChange={onChange} min='0' max='10000' step='100' className='form-control'></input>
  </div>
}

//ベースコンポーネント
function App() {
  return (
    <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <h4 className='my-3'>Hooks Sample</h4>
        <PlainMessage/>
        <AlertMessage/>
        <CardMessage/>
      </div>
    </div>
  )
}

export default App;
