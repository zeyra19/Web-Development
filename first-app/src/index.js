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
