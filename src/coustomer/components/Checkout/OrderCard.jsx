import React from 'react'

const OrderCard = ({item}) => {
  return (
    <div className="p-5  mt-5 mx-4 shadow-md border rounded-md">

    <div className="flex items-center">
        <div className="w-[7rem] h-[7rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src={item.product.imageUrl}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size : {item.size},White</p>
          <p className="opacity-70 mt-2">Seller : {item.product.brand}</p>
          <div className="flex space-x-5 items-center text-base lg:text-base text-gray-900 mt-10">
            <p className="font-semibold">₹{item.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item.price}</p>
            <p className="text-green-600 font-semibold">{item.product.discountedPersent}% off</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard