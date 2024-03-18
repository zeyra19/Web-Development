import React from 'react';

const Navbar = () => {
    return (
        <nav className='ui raised very padded segment'>
            <a className='ui black big inverted segment'> weXSoftware</a>
            <div className='ui right floated header'>
                <button className='ui big button'>
                    <a href='/'>Baba Sayfa</a>
                    {/* bu buton bizi home sayfasına yönlendirecek */}</button>

                <button className='ui big button'><a href='/about'>Hakkımızda</a></button>
                <button className='ui big button'><a href='/contact'>İçeriğimiz</a></button>
            </div>
        </nav>
    )
}

export default Navbar;