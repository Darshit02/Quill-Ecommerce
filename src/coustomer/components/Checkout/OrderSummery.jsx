import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { ShieldCheck, Truck } from 'lucide-react'
import CartItems from '../Cart/CartItems'

const OrderSummery = () => {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-md border border-gray-300'>
            <h1 className='mb-4 text-lg font-semibold flex gap-2 items-center'>Your Shipping Address : <span>
                {/* <Truck className='h-5 w-5'/> */}
                </span> </h1>
            <AddressCard/>
        </div>
        <div className="mt-5">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
         {[1,1,1,1].map((item) =>
         <CartItems />
         )}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-5  ">
          <div className="border px-8 py-3 rounded-md drop-shadow-md">
            <p className="uppercase opacity-60 font-bold pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹1399</span>
              </div>
              <div className="flex justify-between pt-3 text-gray-900">
                <span>Discount</span>
                <span className="text-green-600">-₹399</span>
              </div>
              <div className="flex justify-between pt-3 text-gray-900">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-gray-900">
                <span>Total Amount</span>
                <span className="text-green-600">₹1278</span>
              </div>
            </div>
            <div className="flex justify-center items-center px-3 py-2 bg-blue-500 my-7  rounded-md text-white">
              <button className="text-md font-semibold flex justify-center items-center gap-3">
                <ShieldCheck className="h-4 w-4" />
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummery