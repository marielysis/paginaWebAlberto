import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
  height: 800px;
`;

const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.7), rgba(34,49,63,.7) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: left;
    justify-content: flex-start;
    padding: 1rem;

    h1 {
      font-size: 6rem; 
      margin-left: 4rem;   
    }

    h2 {
      margin-top: 2rem;
      margin-left: 4rem;
    }
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

const ImagenAlberto = () => {

  const { image } = useStaticQuery(graphql`
  query { 
    image: file(relativePath: { eq:"alberto.jpg"}) {
      sharp:childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    }
  `);

  return ( 
  <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
    <TextoImagen>
      <h1>ALBERTO PADRÓN TRAINER</h1>
      <h2>Transforma tu cuerpo y tu mente</h2>
      <Cta href="https://wa.link/nfr6r7">Quiero entrenar</Cta>
    </TextoImagen>
  </ImageBackground> 
  );
}
 
export default ImagenAlberto;