import { Page } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

const HeroBlock = ({ block }: { block: Page['layout'][0] }) => {
  return (
    <div className="w-full">
      <h1>{block.Heading}</h1>
      <div className="h-80 ">
        <Image src={block.image?.url || ''} alt={block.image?.alt || ''} width={400} height={500} />
      </div>
      <a href={block.cta_button.url}>{block.cta_button.lable}</a>
    </div>
  )
}

export default HeroBlock
