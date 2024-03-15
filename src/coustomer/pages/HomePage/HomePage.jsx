import React from 'react'
import Crousal from '../../components/Home/Crousal'
import HomeSectionCrousal from '../../components/Home/HomeSectionCrousal'

const HomePage = () => {
  return (
    <div>
        <Crousal/>
        <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
            <HomeSectionCrousal/>
            <HomeSectionCrousal/>
            <HomeSectionCrousal/>
            <HomeSectionCrousal/>
        </div>
    </div>
  )
}

export default HomePage