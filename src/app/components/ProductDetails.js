import React, {useState, useEffect} from "react";
import Image from "next/image";
import SizeSelection from "./SizeSelection";
import Topping from "./Topping";

const ProductDetails = ({product}) => {
  const [size, setSize] = useState('small');
  const [additionalToppings, setAdditionalToppings] = useState([]);
  const [additionalToppingsPrice, setAdditionalToppingsPrice] = useState(0);
  const [price, setPrice] = useState(0)


  useEffect(() => {
    size === 'small' ? setPrice(parseFloat(product.priceSm + additionalToppingsPrice).toFixed(2)) : 
    size === 'medium' ? setPrice(parseFloat(product.priceMd + additionalToppingsPrice).toFixed(2)) : 
    size === 'large' ? setPrice(parseFloat(product.priceLg + additionalToppingsPrice).toFixed(2)) :
    null
  })

  useEffect(() => {
    if (additionalToppings.length > 0) {
      const toppingPrice = additionalToppings.reduce((a, c) => {
        return a + c.price
      }, 0)
      setAdditionalToppingsPrice(toppingPrice)
    } else {
      setAdditionalToppingsPrice(0)
    }
  }, [additionalToppings]);




  return (
  <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8 ">
      <div className="lg:flex-1 flex justify-center items-center ">
          <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image width={450} height={450} src={product.image} alt="" priority={1} className="mx-auto relative" />
          </div>
      </div>

      <div className="flex flex-col flex-1">
          <div className="flex-1 p-2 text-center lg:text-left">
            <div className="flex-1 overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2 "> 
              <div className="font-semibold">
                <h2 className="capitalize text-3xl mb-1">{product.name}</h2>
                <div className="mb-6 text-lg font-medium">
                  <span> 
                    {size === 'small' ? '35cl' :
                    size === 'medium' ? '50cl' : 
                    size === 'large' ? '75cl' : 
                    null}
                  </span>
                </div>
              </div>

              <SizeSelection product={product} size={size} setSize={setSize} />
              <div className="mb-4 text-xl font-semibold">Choose mixture</div>
              <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
                {product.mixtures?.map((mixture, index) => {
                  return <Topping mixture={mixture} additionalToppings={additionalToppings} setAdditionalToppings={setAdditionalToppings} key={index} />
                })}
              </div>
            </div>
          </div>

          <div className="h-full flex items-center px-2 lg:items-end">
            <button className="btn btn-lg gradient w-full flex justify-center gap-x-2">
              <div>Add to cart for</div>
              <div>N {price}</div>
            </button>
          </div>
      </div>
  </div>);
};

export default ProductDetails;
