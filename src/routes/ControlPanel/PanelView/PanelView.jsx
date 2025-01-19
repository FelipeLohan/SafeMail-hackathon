import { BlockedMailsGraph } from "../../../components/BlockedMailsGraph"
import { ProfileBanner } from "../../../components/ProfileBanner"
import { WhiteBlockList } from "../../../components/WhiteBlockList"

const PanelView = () => {
  return(
    <>
    <ProfileBanner/>
    <BlockedMailsGraph/>
    <WhiteBlockList/>
    </>
  )
}

export { PanelView }