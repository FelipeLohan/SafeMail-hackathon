import { Advertisements } from "../../../components/Advertisements"
import { Footer } from "../../../components/Footer"
import { Forms } from "../../../components/Forms"
import { HeroBanner } from "../../../components/HeroBanner"
import { Plans } from "../../../components/Plans"

const LandingPage = () => {
  return(
    <>
    <HeroBanner/>
    <Plans />
    <Advertisements/>
    <Forms />
    <Footer/>
    </>
  )
}

export { LandingPage }