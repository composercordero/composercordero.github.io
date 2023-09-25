import styled from "styled-components"
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
    margin: 5rem 0 4rem;
    width: 100%; 
    border-bottom: 5px solid #eee; 
    line-height: 0.1rem;

    span { 
        background:#fff; 
        padding-right:1rem;
    }
`;

const info = {
  accent: 'Built with love (and stress),',
  title: 'Debugging every single minute (😦)',
  content: 'I can\'t promise that you won\'t find a Bug. We all have them in our home. What I can promise you is that I keep coming back to the keys to fix as much as I can and learn every single day (in between exercise and eating).'
}


type projectsProps = {

}

const Projects = (props: projectsProps) => {
  return (
    <Container>
            <Hero accent={info['accent']} title={info['title']} content= {info['content']}/>
            <Title><span>Projects I am proud of</span></Title>
            
        </Container>
  )
}
export default Projects