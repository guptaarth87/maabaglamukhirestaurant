import React from 'react'
import Hero from '../Components/Hero/Hero'
import ProductCategoryDisplay from '../Components/ProductCategoryDisplay/ProductCategoryDisplay'
import GallaryTabComponent from '../Components/Gallary/GallaryTabComponent'
import MissionVision from '../Components/BrandingComponents/MissionVission'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

export default function Landing() {
  return (
   <>
   <Hero/>
   <div className="container" style={{"top":"20rem"}}>
 <ProductCategoryDisplay/>
<GallaryTabComponent/>
<MissionVision/>
<Contact/>
 </div>
 <Footer/>
   </>
  )
}
