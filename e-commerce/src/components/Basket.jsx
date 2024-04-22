import '../assets/styles/Basket.css'
import { useEffect, useRef } from 'react'

export default function Basket() {

  let listStorage = useRef()

  useEffect(() => {
    if (localStorage.length === 0) {
      console.log('Stockage vide !')
    } else {
      listStorage.current = JSON.parse(localStorage.getItem('articles'))
      console.log('Liste des items dans le localStorage :', listStorage)
    }   
  }, [listStorage])

  return (
    <div className="basket">
      <div className='basket-div'>
        <h1>Panier</h1>
        {listStorage.current > 0 ? (
          <p>0 €</p>
        ) : (
          <p>0 €</p>
        )}
        
      </div>
      
    </div>
  )
}
