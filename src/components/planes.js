import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import Img from 'gatsby-image';
import styled from "@emotion/styled";


const Titulo = styled.h3`
text-align: left;
font-size: 4rem;
margin-top: 4rem;
`;

const Cta = styled.a`
  display: inline-block;
  background: #A2E00F;
  padding: 20px 40px;
  margin-top: 24px;
  margin-left: 4rem;
  color: #000;
  text-decoration: none;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 700;
  width: 250px;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  width: 70%;
`

export const query = graphql`
query($slug: String!) {
  allDatoCmsPlan(filter: { slug: { eq: $slug } }) {
    nodes {
        titulo
        id
        slug
        descripcion
        imagen {
          fluid(maxWidth:900) {
            ...GatsbyDatoCmsFluid
          }
        }
     }
  }
}
`

const Planes = ({data: { allDatoCmsPlan: { nodes } }}) => {

  const { titulo, descripcion, imagen } = nodes[0];
  return ( 
  <Layout>
    <Main>
      <Titulo>{titulo}</Titulo>
      <p>{descripcion}</p>
      <Img 
        fluid={imagen.fluid} 
       />
       <Cta href="https://wa.link/nfr6r7">Quiero entrenar</Cta>
    </Main>

  </Layout>
   );
}
 
export default Planes;