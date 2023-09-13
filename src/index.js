import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const elem1 = <span>hi</span>;
// const elem2 = <span>hola</span>;
// const jsxEl = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );
// // const elem2 = React.createElement('span', { children: 'світ' });

// const element = React.createElement(
//   'div',
//   { a: 5, b: 10, children: 'привіт' },
//   'Ghbdsn'
// );
// console.log(jsxEl);
// // ReactDOM.render(element, document.querySelector('#root'));
// import paintings from './';
// const painting = paintings[0]
// function Painting(props) {
//   const {url,}
//   console.log(props);
//   return (
//     <div>
//       <img src={props.url}></img>
//       <h2>props.title</h2>
//       <p></p>
//     </div>
//   );
// }
// ReactDOM.render(
//   <Painting url={painting.url} title={painting.titl} authorName={painting.author.name} />,
//   document.querySelector('#root')
// );
