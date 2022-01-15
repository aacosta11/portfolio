import * as React from 'react';
import Layout from '../components/Shared/Layout';
import HomeContent from '../components/Home/HomeContent';
import IsMenuActive from '../Context/IsMenuActive';
// import { StaticImage } from "gatsby-plugin-image"; // to use <img> tag
const IndexPage = () => {
  const [isMenuActive,setIsMenuActive] = React.useState(false);
  return (
    <main>
      <IsMenuActive.Provider value={{isMenuActive,setIsMenuActive}} >
        <Layout content={<HomeContent />} />
      </IsMenuActive.Provider>
    </main>
  )
}
export default IndexPage;