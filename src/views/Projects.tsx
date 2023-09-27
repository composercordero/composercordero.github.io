import styled from "styled-components"
import Hero from "../components/global/Hero";
import ProjectCard from "../components/ProjectCard";
import projectsInfo from "../components/info/projectsInfo"

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
    font-size: 2rem;
    color:${props => props.theme.colors.text};

    a {
    font-size: 1.5rem;
    }
`;

const Title = styled(AccentTitle)`
    margin: 5rem 0 4rem;
    width: 100%; 
    border-bottom: 5px solid #eee; 
    line-height: 0.1rem;

    span { 
        background:${props => props.theme.colors.body}; 
        padding-right:1rem;
    }
`;

const ProjectsGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    position: relative;
    list-style: none;
    padding: 0px;

    @media (max-width: 1080px){
        grid-template-columns: repeat(1, 1fr);
    }

`;

const info = {
    accent: 'Built with love (and stress),',
    title: 'Debugging every single minute 😦',
    content: 'I can\'t promise that you won\'t find a bug. We all have them in our home. What I can promise you is that I keep coming back to the keys to fix as much as I can and learn every single day (in between exercise and eating).'
}

const Projects = () => {
    return (
    <Container>
        <Hero accent={info['accent']} title={info['title']} content= {info['content']}/>
        <Title><span>Projects I am proud of</span></Title>

        <ProjectsGrid>
            {projectsInfo.map((project,i) => (<ProjectCard key={i} title={project.title} description={project.description} tech={project.tech} link={project.link}></ProjectCard>
            ))}
        </ProjectsGrid>
            
    </Container>
    )
}
export default Projects