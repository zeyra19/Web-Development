import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component { // oluşturduğumuz javascript classını react kütüphanesiyle genişletmiş oluyoruz

    constructor(props) {
        super(props)

        this.state = { latitude: 25, errorMessage: ''}

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude})
            },

            (error) => {
                this.setState({ errorMessage: error.message})
            }
        );
    }

    //koşullu render işlemi
    render() {
        if(this.state.errorMessage && !this.state.latitude) {
            return <div> {this.state.errorMessage} </div>
        }
        if(!this.state.errorMessage && this.state.latitude) {
            return <div> {this.state.latitude} </div>
        }
        else{
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)