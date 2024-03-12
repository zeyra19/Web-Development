// import React from 'react'; //bu kütüphanelere index dosyası üzerinden ulaşıyoruz
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>
// );

// //<App /> böyle yaptk çünkü html dosyasını referans olarak göstermemiz gerekiyordu




import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  {/*     const buttonText= 'Click me'!    */ }
  return (
    <div>
      <label for="name" class="label">Enter </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'red', color: 'white' }}>
        submit {/* {buttonText}   köşeli parantezleri kuallanarak çağırdım */}
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)





// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
