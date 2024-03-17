import React from 'react'

class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { entry: '' };
    }

    onFormSubmit = (event) => { // kullanıcı girdiğinde sayfa tekrar tekrar yenilenmesin diye
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
        // kullanıcının formda girdiği değeri (this.state.entry) alarak bir arama işlemi veya başka bir işlem gerçekleştirir
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>

                            <input type='text'
                                placeholder='nuri bilge'
                                onChange={(event) => this.setState({ entry: event.target.value })}
                                //buradaki callback fonksiyonuyla kullanıcının ekrana girdiği değeri alırız
                                //setstate ile yeni değerleri alırız
                                value={this.state.entry}
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

export default SearchInput;