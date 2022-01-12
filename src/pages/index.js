import * as React from 'react';
import _Layout from '../components/Shared/_Layout';
import HomeContent from '../components/Home/HomeContent';
// import { StaticImage } from "gatsby-plugin-image"; // to use <img> tag
const IndexPage = () => {
  return (
    <main>
      <_Layout content={<HomeContent />} />
    </main>
  )
}
export default IndexPage;