import React from "react"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/react"
import styled from "@emotion/styled"


const InstagramPost = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 2rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`
const ImagenIg = styled(Img)`
  with: 100%;
  height: 200px;
`;

const DivFotoIg = styled.div`
border: 1px solid #e1e1e1;
margin-bottom: 2rem;
`;

const ContenidoInstagram = () => {
  const resultado = useStaticQuery(graphql`
  query {
    allInstaNode {
      edges {
        node {
          caption
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
  `)



  const insta = resultado.allInstaNode.edges

  console.log(insta)

  return (
      <>
    <h3
    css={css`
      font-size: 3rem;
    `}
  >Post de Instagram</h3>
    <InstagramPost>
      {insta.map(inst => (
        <DivFotoIg>
          <ImagenIg tag="img" fluid={inst.node.localFile.childImageSharp.fluid} /> {/* fotos de instagram */}
          <div
            css={css`
              padding: 1rem;
            `}
          >
            {/* <p
                          css={css`
                          font-size: 12px;
                        `}
            >{inst.node.caption}</p> */}
          </div>
        </DivFotoIg>
      ))}
    </InstagramPost>
    </>
  )
}

export default ContenidoInstagram