import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
        <div className='space-y-3 px-5 py-5 rounded-md border border-gray-300'>
            <p className='font-semibold'>{address?.firstName+" "+ address?.lastName}</p>
            <p>{address?.streetAddress}</p>
            <div className='space-y-1'>
                <p className='font-semibold'>{address?.state}</p>
                <p className='font-semibold'>{address?.city}</p>
                <p>{address?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard