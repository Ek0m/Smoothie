"use client"

import React, {useState} from "react";
import Image from "next/image";
import Modal from "react-modal";
import ProductDetails from "./ProductDetails";
import {IoCloseOutline} from 'react-icons/io5'

Modal.setAppElement('body')


const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
}

const Product = ({product}) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
        <div className='group py-2 px-4 xl:px-4 xl:px-2 rounded-xl  '>
            <Image onClick={openModal} className="lg:group-hover:translate-y-3 transistion-all duration-300 mb-8 cursor-pointer" width={270} height={270} src={product.image} alt="" priority={1} />

            <div>
              <div className="text-xl font-bold mb-3 capitalize cursor-pointer ">{product.name}</div>
            </div>

            <div className="text-sm font-medium min-h-[60px] mb-6 ">{product.description}</div>

            <div className="mb-6 flex items-center justify-between">
              <div className="hidden lg:flex text-xl font-semibold">Prepared at {product.priceSm}</div>
              <button onClick={openModal} className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm ">Chow</button>
              <button onClick={openModal} className="btn btn-sm gradient text-sm lg:hidden px-3 ">prepared at {product.priceSm}</button>
            </div>
            {modal && <Modal 
              isOpen={modal} 
              style={modalStyles} 
              onRequestClose={closeModal} 
              contentLabel="Product Moda" 
              className='bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none'
              >
              <div onClick={closeModal} className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer ">
                <IoCloseOutline className="text-4xl text-orange" />
              </div>

              <ProductDetails product={product} modal={modal} setModal={setModal} />
              </Modal>}
        </div>);
};

export default Product;