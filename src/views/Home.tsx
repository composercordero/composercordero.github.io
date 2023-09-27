import styled from "styled-components"
import Hero from "../components/global/Hero";
import Card from "../components/global/FeaturedProject"
import featuredProjects from "../components/info/featuredProjects"

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

    @media (max-width: 1025px) {
        width: 70%;
        }

    @media (max-width: 769px) {
        width: 65%;
        }
`;

const AccentTitle = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: ${props => props.theme.fontSizes.l};;
    color: ${props => props.theme.colors.text};

    a {
    font-size: ${props => props.theme.fontSizes.m};;
    }
`;
const Title = styled(AccentTitle)`
    margin: 5rem 0 4rem;
    width: 100%; 
    border-bottom: 5px solid #eee; 
    line-height: 0.1rem;

    span { 
        background: ${props => props.theme.colors.body};
        padding-right:1rem;
    }
`;

const info = {
    accent: 'Dear diary,',
    title: 'I am in love with JavaScript (🙈)',
    content: 'As a Junior Software Developer, I care about user-centered solutions that communicate meaningful moments and make everyone\'s life more exciting. Let me tell you about my love for JS.'
}

const Home = () => {
    
    return (<>   
        <Container>
            <Hero accent={info['accent']} title={info['title']} content= {info['content']}/>
            
            <Title><span>Featured Projects</span></Title>
            
            {featuredProjects.map((project, i)=> (<Card key={i} summary={project.summary} title={project.title} content={project.content} tech={project.tech} image={project.image}></Card>)
            )}
            
        </Container>
    
    </>)
}
export default Home