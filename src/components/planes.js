import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import Img from 'gatsby-image';
import { css } from '@emotion/react';
import styled from "@emotion/styled";


const Titulo = styled.h3`

font-size: 2rem;
margin-top: 4rem;
`;

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
    <main 
      css={css`
      margin: 0 auto;
      max-width: 1200px;
      width: 95%;
  `}
    >
      <Titulo>{titulo}</Titulo>
      <p>{descripcion}</p>
      <Img 
        fluid={imagen.fluid} 
       />
    </main>

  </Layout>
   );
}
 
export default Planes;