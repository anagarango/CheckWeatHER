import styled from "styled-components";

export const Container = styled.div`
    width: ${props=>props.width || "100vw"};
    min-width: ${props=>props.minWidth};
    height: ${props=>props.height};
    max-height: ${props=>props.maxHeight};
    display:flex;
    flex-direction:${props=>props.flexDir || "column"};
    align-items:${props=>props.aliIt || "center"};
    justify-content:${props=>props.justCont || "center"};
    background-color:${props=>props.bgColor};
    padding:${props=>props.padding};
    border-radius:${props=>props.bRadius};
    margin:${props=>props.margin};
    margin-bottom:${props=>props.marginBottom};
    border-bottom:${props=>props.borderBottom};
    border-right:${props=>props.borderRight};
    position: ${props=>props.position};
    top:${props=>props.top};
    bottom:${props=>props.bottom};
    left:${props=>props.left};
    background-image: url(${props=>props.url});
    background-repeat: no-repeat;
    background-size:contain;
    cursor:${props=>props.cursor};
  `
export const Heading = styled.h1`
    font-size:${props=>props.fSize || "60px"};
    font-weight:${props=>props.fWeight};
    color:${props=>props.color};
    padding:${props=>props.padding};
    width:${props=>props.width};
    position: ${props=>props.position};
    top:${props=>props.top};
    left:${props=>props.left};
    margin:${props=>props.margin};
    font-family:${props=>props.fontFamily}
  `
  

export const Image = styled.img`
    width:${props=>props.width || "35vw"};
    max-width: ${props=>props.maxWidth || "350px"};
    margin:${props=>props.margin};
    padding:${props=>props.padding}
  `