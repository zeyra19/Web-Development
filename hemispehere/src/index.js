import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component { // oluşturduğumuz javascript classını react kütüphanesiyle genişletmiş oluyoruz

    constructor(props) {
        super(props)

        this.state = { latitude: 25, errorMessage: '' }
    }

    // state = { latitude: 25, errorMessage: '' }
    // STATEİ BÖYLE DE TANIMLAYABİLİRİZ STATE= YAZIP DA TAMAMLAYABİLİRİZ

    componentDidMount() { //api isteği için 
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },

            (error) => {
                this.setState({ errorMessage: error.message })
            }
        );
    }


    //koşullu render(ekrana yazdırma) işlemi
    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div> {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div> <HemisphereDisplay latitude= {this.state.latitude} /> </div>
        }
        else {
            return <div>Yükleniyor....</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

