import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

const AccentTitle = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 2rem;
    color:#444;

    a {
    font-size: 1.5rem;
    }
`;

const Title = styled(AccentTitle)`
    margin-top: 5rem;
    width: 100%; 
    border-bottom: 5px solid #eee; 
    line-height: 0.1rem;

    span { 
        background:#fff; 
        padding-right:1rem;
    }
`;

const HeroTitle = styled.h1`
    font-size: 6rem;
    line-height:1.2;
    margin-bottom:2rem;
    font-weight: 600;
    color: #444;
`;

const HeroContent = styled.p`
    font-size: 2rem;
    line-height: 1.8;
    font-weight: 200;
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
                <Link to="about" style = {{textDecoration: 'none', color: '#ff0080'}}onClick={(e) => { e.preventDefault(); navigate("about") }}>{accent}</Link>
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