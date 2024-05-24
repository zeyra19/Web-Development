import { useState } from "react";

function Product({ product, total, money, basket, setBasket }) {


    const basketItem = basket.find(item => item.id === product.id)


    const addBasket= () => {
        const checkBasket = basket.find(item => item.id === product.id)

        if(checkBasket){
            checkBasket.amount += 1 //daha önce ürün eklendiyse bir arttırıcam
            setBasket([...basket.filter(item=> item.id !== product.id), checkBasket]) 
        }
        else
        {
            setBasket([...basket, { // ilk sepeti sonra yeni sepetin içeriğini ekrana bas
                id: product.id,
                amount: 1
            }]) //sepetteki ürün diye const açmak yerine burada oluşturdum
        }
    }


    const removeBasket= () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item=> item.id !== product.id)

            currentBasket.amount -= 1 //sepetten bir eksilecek

            if(currentBasket.amount === 0) {
                setBasket([...basketWithoutCurrent])
            }
            else
            {
            setBasket([...basketWithoutCurrent, currentBasket])
            }
    }


    return (
        <div className="product">
            <h3>{product.title} </h3>

            <div className="price"></div>
                $ {product.price}

            <div className="actions">
                <button 
                disabled={!basketItem}
                onClick={removeBasket}>çıkart
                </button>

                <span className="amount">{basketItem && basketItem.amount || 0}</span>

                <button 
                disabled= {total + product.price > money}
                onClick={addBasket}>sepete ekle</button>
            </div>
        </div>
    )
}

export default Product