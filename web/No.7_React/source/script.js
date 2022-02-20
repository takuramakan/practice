let dom = document.querySelector('#root');

//Reactの仮想DOMにエレメント生成
let element = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, "Hello!"
        ),
        React.createElement(
            'h3', {className:'alert alert-primary'}, "React sample page."
        ),
        React.createElement(
            'ul', {className:'list-group'}, [
                React.createElement(
                    'li', {className:'list-group-item'}, "First item."
                ),
                React.createElement(
                    'li', {className:'list-group-item'}, "Second item."
                ),
                React.createElement(
                    'li', {className:'list-group-item'}, "Third item."
                )                                
            ]
        )
    ]
)

//画面への反映
ReactDOM.render(element, dom)
