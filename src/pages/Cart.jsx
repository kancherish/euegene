import { useEffect, useState } from 'react'
import Product from '../component/Product'
import database from '../backend/DataBase';
import { Query } from 'appwrite';
import loading from "../assets/loading.gif"
import { useSelector } from 'react-redux';
import changeLink from '../component/Navbar/changeLink';

function Cart() {


  const [products,setProducts] = useState([]);


  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const userData = useSelector((state)=>state.authReducer.userData)

  async function productsLoad() {
    setIsDialogOpen(true);

    let _cart = await database.getUserCart([Query.equal("user_id",userData.$id)]);

    const _products =await Promise.all(
      _cart.documents.map(async (cart) => {
        const product = await database.getProduct(cart.product_id);
        return product;
      })
    );
    

    setProducts(_products)

    setIsDialogOpen(false)
  }


  useEffect(() => {
    productsLoad()
    changeLink("#cart")
  }, [])


  return (
    <>
    <dialog className={`h-screen w-screen flex justify-center items-center bg-slate-50/30 ${isDialogOpen ? "" : 'hidden'}`}>
          <div className="w-full flex flex-col justify-center items-center">
            <img src={loading} alt="" />
            <h1 className="text-slate-900 text-3xl font-bold">PLEASE WAIT </h1>
          </div>

        </dialog>
      <div className='h-full w-full flex flex-col justify-center items-center text-4xl text-slate-50'>
        <h1 className='p-6'>
          {`${userData.name}'s CART`}
        </h1>
        <div className='w-full p-4 flex flex-wrap justify-center'>
          {/* {console.log(products)} */}
          {products.length>0?(products.map((product) => {
            return <Product key={product.$id} id={product.$id} name={product.product_name} price={product.price} img_id={product.product_image}/>
          })):(
            <h1>
              NO PRODUCTS Added TO CART
            </h1>
          )}
        </div>
      </div>
    </>

  )
}

export default Cart