import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

const AccentTitle = styled.p`
    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeights.bolder};
    font-size: 2rem;
    color:#444;

    a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.accentColor[500]};
    }
`;

const HeroTitle = styled.h1`
    font-size: ${props => props.theme.fontSizes.xxxl};
    line-height:1.2;
    margin-bottom:2rem;
    font-weight: ${props => props.theme.fontWeights.bolder};
    color: ${props => props.theme.colors.text};


    @media (max-width: 1025px) {
        font-size: ${props => props.theme.fontSizes.xxl};
        }

    @media (max-width: 769px) {
        font-size: ${props => props.theme.fontSizes.xl};
        }


`;

const HeroContent = styled.p`
    font-size: 2rem;
    line-height: 1.8;
    font-weight: ${props => props.theme.fontWeights.light};
    color: ${props => props.theme.colors.text};

    @media (max-width: 1025px) {
        font-size: ${props => props.theme.fontSizes.m};
        }

    @media (max-width: 769px) {
        font-size: ${props => props.theme.fontSizes.s};
        }

`;

type heroProps = {
    accent:string,
    title:string,
    content:string,
}


const Hero = ({accent, title, content}:heroProps) => {

    const navigate = useNavigate();

    return (<>   
            <AccentTitle>
                <Link to="about" onClick={(e) => { e.preventDefault(); navigate("/") }}>{accent}</Link>
            </AccentTitle>

            <HeroTitle>
                {title}
            </HeroTitle>

            <HeroContent>
                {content}
            </HeroContent>
    
    </>)
}
export default Hero