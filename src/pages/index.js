import * as React from 'react';
import Layout from '../components/Shared/Layout';
import HomeContent from '../components/Home/HomeContent';
// import { StaticImage } from "gatsby-plugin-image"; // to use <img> tag
const IndexPage = () => {
  return (
    <main>
      <Layout content={<HomeContent />} />
    </main>
  )
}
export default IndexPage;