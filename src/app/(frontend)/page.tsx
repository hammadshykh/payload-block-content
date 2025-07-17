// import { RichText } from "@/component/RichText";
// import { getPayload } from "payload";
// import config from "@payload-config";
// import { getEnabledCategories } from "trace_events";
// import getBlog from "@/lib/actions/getBlog";
// import Blog from "./Components/Blog";

import HeroBlock from '@/components/blocks/HeroBlock'
import { Page } from '@/payload-types'
import payloadConfig from '@/payload.config'
import { getPayload } from 'payload'

const MainPageCMS = async () => {
  const payload = await getPayload({ config: payloadConfig })

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'landing-page' },
    },
  })

  if (!page) return <div>Page not found </div>

  const renderBlocks = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />

      default:
        return null
    }
  }

  return (
    <div>
      <h1 className="text-center !text-black text-4xl font-bold">{page?.title}</h1>
      return <div className="page">{page.layout?.map((block) => renderBlocks(block))}</div>
    </div>
  )
}

export default MainPageCMS

// export const dynamic = 'force-dynamic'
