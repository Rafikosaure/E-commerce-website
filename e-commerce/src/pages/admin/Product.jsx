import { useForm } from "react-hook-form"
import '../../assets/styles/Product.css'
import axios from 'axios'
import { URL_ADD } from "../../urls/Urls"
import { useSelector, useDispatch } from 'react-redux'
import { addItemToBasket, selectItems } from '../../redux/features/basketSlice'


export default function Product() {

  const { register, handleSubmit } = useForm()
  let Article;
  const dispatch = useDispatch()
  const storeItems = useSelector(selectItems)
  let listItems = []

  const onSubmit = async (product) => {
    Article = {...product, stock: parseInt(product.stock), price: parseInt(product.price), 
      online: product.online === "false" ? false : true, picture: [{ img: product.picture }]}
    try {
      const response = await axios.post(URL_ADD, Article)
      let initialStorage = localStorage.getItem('articles')
      if (initialStorage !== null) {
        const listStorage = JSON.parse(localStorage.getItem("articles"))
        listStorage.push(Article)
        localStorage.setItem("articles", JSON.stringify(listStorage))
      } else {
        const listStorage = []
        listStorage.push(Article)
        localStorage.setItem('articles', JSON.stringify(listStorage))
      }
      console.log(response)
      dispatch(addItemToBasket(Article))
      listItems.push(Article)
    } catch(error) {
      console.log(error)
    }
    return Article
  }
  console.log('Contenu actuel du panier :', storeItems)
  // console.log('Contenu de la liste des items :', listItems)

  return (
    <>
    <div className="product-page">
      <h1>Achat produit</h1>
      <form className='form-article' onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name='name' required {...register("name")} />

        <label htmlFor="category">Catégorie :</label>
        <select id="category" name='category' required {...register("category")} >
          <option value="">--Genre--</option>
          <option value="man">Masculin</option>
          <option value="woman">Féminin</option>
        </select>

        <label htmlFor="brand">Marque :</label>
        <input type="text" id="brand" name='brand' required {...register("brand")} />

        <label htmlFor="price">Prix :</label>
        <input type="number" id="price" name='price' required {...register("price")} />

        <label htmlFor="content">Description :</label>
        <input type="text" id="content" name='content' required {...register("content")} />

        <label htmlFor="stock">Unités en stock :</label>
        <input type="number" id="stock" name='stock' required {...register("stock")} />

        <fieldset>
          <legend>Disponible en ligne :</legend>

          <div className="div-radio">
            <input className="input-radio" type="radio" id="yes" value={true} name="online" checked {...register("online")} />
            <label className="label-radio" htmlFor="yes">Oui</label>
          </div>

          <div className="div-radio">
            <input className="input-radio" type="radio" id="no" value={false} name='online' {...register("online")} />
            <label className="label-radio" htmlFor="no">Non</label>
          </div>
        </fieldset>

        <label htmlFor="pictures">Image (url) :</label>
        <input type="url" id="pictures" name='picture' required {...register("picture")} />

        <button type="submit">Enregistrer</button>
      </form>
    </div>
    {/* <div>
      {listItems.length > 0 ? (<table>
        <caption>Tableau des articles</caption>
        <thead>
          <tr>
              <th>Nom de l'article</th>
              <th>Marque</th>
              <th>Description</th>
              <th>Prix</th>
          </tr>
          </thead>
          <tbody>
          {listItems.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.content}</td>
                <td>{item.price} €</td>
              </tr>
            )
          })}
          </tbody>
        </table>) : null 
      }
    </div> */}
  </>
  )
}
