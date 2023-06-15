import React, {useState, useEffect} from "react";
import Image from "next/image";
import {IoMdCheckmark} from 'react-icons/io'

const Topping = ({mixture, additionalToppings, setAdditionalToppings}) => {

  const [isChecked, setIsChecked] = useState(false);


    const handleCheckBox =() => {
      setIsChecked(!isChecked)
    }

    const handleMixture = () => {
      if(isChecked) {
          const newMixture = new Set([...additionalToppings, {...mixture}])
          console.log(newMixture)
          setAdditionalToppings(Array.from(newMixture))
          
      }else {
              const newMixture = additionalToppings.filter((mixtureObj) => {
                return mixtureObj.name !== mixture.name
              })
              setAdditionalToppings(newMixture)
      }
    };

    useEffect(() => {
      handleMixture()
    }, [isChecked])



  return(  
     <div className={`${isChecked && 'border-orange'} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative `}> 
  
    <Image src={mixture.image} width={70} height={70} alt="" className="mb-2" />
    <div className="text-sm capitalize text-center font-medium">
      {mixture.name}
    </div>
    <input className="absolute w-full h-full opacity-0 cursor-pointer" type="checkbox" checked={isChecked} onChange={handleCheckBox}  />

    <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
      <IoMdCheckmark className="text-xl text-orange" />
    </div>
      </div>);
};

export default Topping;
