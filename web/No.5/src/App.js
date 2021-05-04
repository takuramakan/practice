import React from "react";

function App() {
  //const greeting = "Hi!";
  //const dom = <h1 className="foo">{greeting}</h1>;
  return (
    //このHTMLのような記載がJSX
    //<h1>Hello,world!!</h1>
    //dom
    //Reactの戻り値は一つのタグでないといけないreact.fragmentはそのためのタグ。HTML上には現れない
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log("I am clicked!")}}></input>
    </React.Fragment>
  );
}

//import React from "react";

//Jsで書き換えるとこんな感じ
// function App() {
//   return (
//     React.createElement(
//       "div",
//       null,
//       "Hello,world!!"
//     )
//   );
// }

export default App;
