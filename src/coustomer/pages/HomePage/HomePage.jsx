import React from 'react'
import Crousal from '../../components/Home/Crousal'
import Service from '../../components/Home/Service'
import FeatureProducts from '../../components/Home/FeatureProducts'
import OurProducts from '../../components/Home/OurProducts'



const HomePage = () => {
  return (
    <div className='-z-10'>
        <Crousal/>
        <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
            <Service/>
            <FeatureProducts/>
            <OurProducts/>
        </div>
    </div>
  )
}

export default HomePage