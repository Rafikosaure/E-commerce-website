import { useForm } from "react-hook-form"
import '../../assets/styles/Product.css'
import axios from 'axios'
import { URL_ADD } from "../../urls/Urls"


export default function Product() {

  const { register, handleSubmit } = useForm()
  let Article;
  
  const onSubmit = async (product) => {
    Article = {...product, stock: parseInt(product.stock), price: parseInt(product.price), online: product.online === "false" ? false : true, picture: [{ img: product.picture }]}
    console.log(Article)
    try {
      const response = await axios.post(URL_ADD, Article)
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
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
  )
}
