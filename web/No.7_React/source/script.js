let dom = document.querySelector('#root');

//Reactの仮想DOMにエレメント生成
let element = React.createElement(
    'p', {}, "Hello React"
)

//画面への反映
ReactDOM.render(element, dom)
