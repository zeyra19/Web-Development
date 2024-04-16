import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import products from "./products.json"
import Product from './components/Product';

function App() {

  const [money, setMoney]=useState(100) //başlangıçtaki değişkenlerim bunlar ve başlangıç param 100 tl
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const resetBasket = () => {
    setBasket([]) //böyle sıfırladım
  }

  useEffect(()=>{

    setTotal= (basket.reduce((acc, item) => { //hesaplama + işlem
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0))

  }, [basket]) //sepette bir değişiklik olduğunda


  return (
    <>
    <Header total={total} money= {money}/>
    {products.map(product => (
      <Product 
      key={product.id} 
      basket={basket} 
      setBasket={setBasket} 
      product={product} 
      total={total}
      money={money}/>
    ))}
    <button onClick={resetBasket}>Sepeti BOŞALT</button>
    </>
  );
}

export default App;
