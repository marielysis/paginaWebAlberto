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
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
`;

const DivFotoIg = styled.div`
  border: 1px solid #e1e1e1;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
  
    
`;

const Hover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transform: scale(0);
    background: #5b40f3a6;
    transition: transform .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover {
      transform: scale(1);
    }

`;

const Description = styled.div`
    color: #FFFFFF;
    font-size: 9px;
    display: flex;
    text-align: center;
    text-justify: auto;
    flex-direction: column;
    padding:0px 10px 0px 10px;
`;


const Titulo = styled.h3`
text-align: center;
font-size: 4rem;
margin-top: 4rem;
`;

const ContenidoInstagram = () => {
  const resultado = useStaticQuery(graphql`
  query {
    allInstaNode(limit: 6) {
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
    <Titulo>Post de Instagram</Titulo>
    <InstagramPost>
      {insta.map(inst => (
        <DivFotoIg>
          <a href="https://www.instagram.com/albertopadrontrainer/" target="_blank"><ImagenIg tag="img" fluid={inst.node.localFile.childImageSharp.fluid} /></a> {/* fotos de instagram */}
          
          <Hover>
            <Description>
              <p>{inst.node.caption}</p>
            </Description>
          </Hover>
        </DivFotoIg>
      ))}
    </InstagramPost>
    </>
  )
}

export default ContenidoInstagram