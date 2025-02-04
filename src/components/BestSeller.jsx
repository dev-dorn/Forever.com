import { useContext, useState, useEffect } from 'react';
import { ShopContext } from "../context/ShopContext"
import Title from './title';
import ProductItem from './productItem';


const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [BestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0, 5 ))

    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Best'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptatibus, deserunt minima non excepturi sed odio dolorum tempore laboriosam dolorem tempora commodi at reiciendis, iusto alias totam cum eveniet accusantium!
            </p>
            </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        BestSeller.map((item, index) =>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
        ))
      }
      </div>
      
    </div>
  )
}

export default BestSeller
