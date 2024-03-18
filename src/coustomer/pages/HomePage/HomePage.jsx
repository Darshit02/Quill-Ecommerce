import React from 'react'
import Crousal from '../../components/Home/Crousal'
import HomeSectionCrousal from '../../components/Home/HomeSectionCrousal'
import { kurta } from '../../../Data/kurta'

const HomePage = () => {
  return (
    <div className='-z-10'>
        <Crousal/>
        <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCrousal data={kurta} sectionName="Women's Kurti"/>
            <HomeSectionCrousal data={kurta} sectionName="Men's Shirt"/>
            <HomeSectionCrousal data={kurta} sectionName="Men's Shoe"/>
            <HomeSectionCrousal data={kurta} sectionName="Kid's Wear"/>
        </div>
    </div>
  )
}

export default HomePage