import BestSeller from "../components/BestSeller"
import Hero from "../components/hero"
import LatestCollection from "../components/latestCollection"
import NewsLettterBox from "../components/NewsLettterBox"
import OurPolicy from "../components/OurPolicy"
const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLettterBox/>
      
    </div>
  )
}

export default Home
