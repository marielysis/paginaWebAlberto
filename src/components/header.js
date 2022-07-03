import React from 'react';
import styled from '@emotion/styled';
import Navegacion from './navegacion';
import{ Link, useStaticQuery, graphql } from 'gatsby';

    const Headerstyled = styled.div`
        background-color: #000;
        padding: 1rem;
        border-bottom: 2px solid #ffffff;
    `;
    
    const Divheader = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `;

const Header = () => {

    // consultar el logo.svg

   const { logo } = useStaticQuery( graphql `
    query {
        logo: file(relativePath: {eq: "logo.svg"}){
              publicURL
        }
      }
    `);
    console.log(logo);
    

  return ( 
  <Headerstyled>
    <Divheader>
      <Link
        to='/'
      ><img src={logo.publicURL} alt='Logotipo Alberto Padron Trainer'/></Link>
      <Navegacion />
    </Divheader>
  </Headerstyled>
   );
}
 
export default Header;
