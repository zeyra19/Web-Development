import React from 'react'
import SearchInput from './Searchinput';

class App extends React.Component {


    onSearchSubmit = (entry) => {

    }


    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;