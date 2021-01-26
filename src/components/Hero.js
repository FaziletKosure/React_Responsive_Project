import React from 'react'
import styled,{css} from 'styled-components/macro'
import { SliderData } from '../data/SliderData'

const HeroSection=styled.section`
height:100vh;
max-height:1100hv;
position:relative;
overflow:hidden;
`
const HeroWrapper=styled.div`
width:100%;
height:100%;
overflow:hidden;
position:relative;
display:flex;
justify-content:center;
align-items:center;
`

const HeroSlide=styled.div``
const HeroSlider=styled.div``
const HeroImage=styled.img``
const HeroContent=styled.div``
const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
            {SliderData.map((slide,index)=>{
                return(
                    <HeroSlide key={index}>
                        <HeroSlider>
                            <HeroImage/>
                            <HeroContent>
                              <h1>{slide.title}</h1>  
                            </HeroContent>
                                
                        </HeroSlider>
                    </HeroSlide>
                )
            }

         

            )}
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
