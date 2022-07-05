import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import Layout from '../components/layout';
import ImagenAlberto from '../components/imagenalberto';
import ContenidoInicio from '../components/contenidoInicio';
import usePlanes from '../hooks/use-planes';
import PlanPreview from '../components/planPreview';
import ContenidoInstagram from '../components/contenidoInstagram';
import ContenidoYoutube from '../components/contenidoYoutube';
import ContenidoTestimonios from '../components/contenidoTestimonios';


const ListadoPlanes = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
    }
  `;


const Index = () => {
  const planes = usePlanes();
  console.log(planes);

    return ( 
        <Layout>
            <ImagenAlberto />
            <ContenidoInicio /> 

            <ListadoPlanes>
        {planes.map(plan => (
          <PlanPreview
            key={plan.id}
            plan={plan}
          />
        ))}  
      </ListadoPlanes> 
      <ContenidoInstagram />
      <ContenidoYoutube />
      <ContenidoTestimonios />
           
              
        </Layout>
        
     );
}
 
export default Index;