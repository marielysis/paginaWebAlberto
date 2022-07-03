import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import{ Link } from 'gatsby';

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44,62,80,.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`;

const DivImagen = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 2rem;
`;

const Divdos = styled.div`
  padding: 3rem;
`
const Texto = styled.h3`
  padding: 3rem;
`

const PlanPreview = ({plan}) => {

const { descripcion, imagen, titulo, slug } = plan;

  return ( 
    <DivImagen>
      <Img 
        fluid={imagen.fluid} 
      />
      <Divdos>
        <Texto>{titulo}</Texto>
        <p>{descripcion}</p>
        <Boton to={slug}>Ver Plan</Boton>
      </Divdos>
    </DivImagen>
   );
}
 
export default PlanPreview;