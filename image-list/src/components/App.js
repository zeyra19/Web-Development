import React from 'react';
import axios from 'axios';
import SearchInput from './Searchinput';
import ImageList from './imageList';


class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=42931583-1f616c5277f6d77186c460c5f&q=${entry} &image_type=photo`)
        // kullanıcının girdiği veriyi almak istiyorum onsearchsubmite girdiğim entry ile değiştirdim
        // verinin gelmesi zaman alacağı için async kullandım

        this.setState({ images: response.data.hits })
    }


    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                {/* images adında props ekledim */}
            </div>
        )
    }
}

export default App;