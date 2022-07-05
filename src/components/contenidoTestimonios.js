import React from "react"
import styled from "@emotion/styled"


const Slider = styled.div`
  margin: 0 auto;
`
const TituloSeccion = styled.h2`
    text-align: center;
    font-size: 4rem;
    margin-top: 4rem;
`


const ContenidoTestimonios = () => {
  return (
    <Slider>
        <TituloSeccion>Testimonios</TituloSeccion>
    </Slider>
  )
}

export default ContenidoTestimonios