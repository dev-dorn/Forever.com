import { useContext, useEffect, useState }from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './productItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    {/*This code sets up a state variable latestProducts and, when the component mounts, it updates latestProducts to contain the first 10 items from the products array. This can be useful for displaying a limited selection of products on a homepage or a specific section of a webpage.   */}
     const [latestProducts, setLatestProducts] = useState([]);
     useEffect(() => {
      setLatestProducts(products.slice(0,10))


     },[])
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ut cupiditate! Atque tempora magni eligendi saepe! Temporibus maxime repellendus deleniti fugit architecto minus neque aliquam dolor. Ullam mollitia neque aut!
            </p>
        </div>
        {/*rendering products*/} 
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }

      
    </div>
  </div>
  )
}

export default LatestCollection

