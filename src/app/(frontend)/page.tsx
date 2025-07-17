// import { RichText } from "@/component/RichText";
// import { getPayload } from "payload";
// import config from "@payload-config";
// import { getEnabledCategories } from "trace_events";
// import getBlog from "@/lib/actions/getBlog";
// import Blog from "./Components/Blog";

import Banners from '@/components/Banners'
import { getBanners } from '@/lib/action/banner'

const MainPageCMS = async () => {
  const bannerResponse = await getBanners()

  const banners = bannerResponse?.docs || []

  return <div>{!bannerResponse ? <div>No Banner </div> : <Banners data={banners} />}</div>
}

export default MainPageCMS

export const dynamic = 'force-dynamic'
