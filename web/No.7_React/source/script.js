let dom = document.querySelector('#root');

//Reactの仮想DOMにエレメント生成
let element = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, "Hello!"
        ),
        React.createElement(
            'h3', {}, "React sample page."
        ),
        React.createElement(
            'ul', {}, [
                React.createElement(
                    'li', {}, "First item."
                ),
                React.createElement(
                    'li', {}, "Second item."
                ),
                React.createElement(
                    'li', {}, "Third item."
                )                                
            ]
        )
    ]
)

//画面への反映
ReactDOM.render(element, dom)
