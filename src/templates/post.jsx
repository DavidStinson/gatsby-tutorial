import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Post({data}) {
  return (
    <Layout>
      <div 
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        style={{marginTop:"2rem"}}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`