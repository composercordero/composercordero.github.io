import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/global/Hero";

const Container = styled.section`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0 4rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
`;

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

const info = {
    accent: 'Dear diary,',
    title: 'I am in love with JavaScript!',
    content: 'As a Junior Software Developer, I care about user-centered solutions that communicate meaningful moments and make everyone\'s life more exciting. Let me tell you about my love for JS (and Python, SQL, and so on 🙈).'
}

const Home = () => {

    const navigate = useNavigate();

    return (<>   
        <Container>
            <Hero accent={info['accent']} title={info['title']} content= {info['content']}/>
            
            <Title><span>Featured Projects</span></Title>


        </Container>
    
    </>)
}
export default Home