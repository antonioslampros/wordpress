import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Homepage(props) {
  if (typeof window !== `undefined`) {
    const { homepage } = props.data
  }

  return (// Wrap the require in check for window
  
    <Layout>
      {homepage.blocks.map((block) => {
        
        if (typeof window !== `undefined`) {
          const { id, blocktype, ...componentProps } = block
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...componentProps} />
        }
        
        
        
      })}
    </Layout>
  )
}
export const Head = (props) => {
  if (typeof window !== `undefined`) {
    const { homepage } = props.data
  }

  return <SEOHead {...homepage} />
}
export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageProductListContent
      }
    }
  }
`
