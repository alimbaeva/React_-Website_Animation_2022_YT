import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';


const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const HeroSlide = styled.div``;
const HeroSlider = styled.div``;
const HeroImage = styled.div`
    background-color: red;
    background-image: url(../src/images/house2.jpeg);
    width: 100px;
    height: 100px;
`;
const HeroContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index:10;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: .3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.prise}</p>
                                    <Button to={slide.path} primary='true'
                                        css={`max-width: 160px;`}
                                    >
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow />
                    <NextArrow />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero