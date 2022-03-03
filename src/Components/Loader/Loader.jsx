import React from 'react'
import styled from 'styled-components'

export default function Loader() {
    return (
        <Cont>
            <ImgCont>
                <Img className="ImgCont">
                    <img src="loader.gif" alt="HI" />
                </Img>
            </ImgCont>
        </Cont>
    )
}
const Cont = styled.div`
  position: relative;
    height: 100vh;
    width: 100vw;
    @media (min-width: 768px) {
        :hover .ImgCont{
        transform: translateX(40%);
        }
  }
`
const ImgCont = styled.div`
    position: absolute;
    display: flex;
    margin: auto;
    // top: 7rem;
    left: 30%;
`
const Img = styled.div`
margin-left: -13.5rem;
transition: 1s;
margin-left: -25rem;
    img{
        width:100%;
        margin:auto;
    }
     @media (max-width: 768px) {
     width: 150px;
    margin-top: 12rem;
    margin-left: -11rem;
  }
`