import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { // oluşturduğumuz javascript classını react kütüphanesiyle genişletmiş oluyoruz
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return (
            <div>
                sen kuzey yarım küredesin
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)