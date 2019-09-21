import React from "react"
import styled from "styled-components"

const breakPoint = 600

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

const Col = styled.div`
  width: 100%;

  @media only screen and (min-width: ${breakPoint}px) {
    width: 50%;
  }
`

function TwoColumn({ left, right }) {
  return (
    <Container>
      <Col>{left}</Col>
      <Col>{right}</Col>
    </Container>
  )
}

export default TwoColumn
