import { BlockedMailsGraph } from "../../../components/BlockedMailsGraph"
import { ProfileBanner } from "../../../components/ProfileBanner"
import { WhiteBlockList } from "../../../components/WhiteBlockList"
import { Footer } from "../../../components/Footer"

const PanelView = () => {
  return(
    <>
    <ProfileBanner/>
    <BlockedMailsGraph/>
    <WhiteBlockList/>
    <Footer />
    </>
  )
}

export { PanelView }