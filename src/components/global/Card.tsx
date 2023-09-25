import styled from "styled-components"
import dashboard from "../../assets/CORO-Programming-Dashboard.png"
import user from "../../assets/CORO-user-dashboard.png"


const ProjectContent = styled.div`
`;

const ProjectImage = styled.div`
display: flex;
justify-content: space-around;
gap: 1rem;
margin: 1rem;

img{
    width: 45%;
    border-radius:25px;
    padding: 0;
    margin: 0;
    max-width: none;
}
`;

const ProjectSummary = styled.p`
    margin-top: 1rem;
    color: #ff0080;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform:uppercase;
`;

const ProjectTitle = styled.h1`
    font-size: 2.5rem;
    color:#444;
    margin-bottom: 1rem;
    font-weight:700;
    }
`;

const ProjectDescription = styled.div`
    position: relative;
    z-index: 2;
    padding: 2rem;
    border-radius: 25px;
    background-color: #eee;
    font-size: 1.125rem;
    font-weight: 200;
    line-height: 1.8;
    text-align: justify;
    margin-bottom: 1rem;
`;

const ProjectTech = styled.ul`
    display:flex;
    flex-wrap: wrap;
    position:relative;
    z-index: 2;
    margin: 1rem 0;
    padding: 0;
    list-style: none;

    li{
        margin: 0 1rem 0.5rem 0;
        font-size: 0.875rem;
        font-weight: 700;
        padding: 0.3rem 0.875rem;
        border-radius: 25px;
        color: #ff0080;
        border: 1px solid #ff0080;
        background:0 0;
    }

    li:hover{
        background-color: #ff0080;
        color: #ffffff;
        cursor: pointer;
        transition: 0.2s ease;
    }


`;

type featuredProjectProps = {
    summary:string,
    title:string,
    content:string,
    tech:string,
    image:string,
    git:string,
    link:string,
}

const techMock:string[] = ['React.js', 'Vite', 'TypeScript', 'Python', 'Flask', 'MySQL']

const info = [
    {
        summary:'Project Summary',
        title:'Project Title',
        description: 'CORO is a programming app for church choirs that allows staff to have a solid management on the music of the church.',
        tech: ['React.js', 'Vite', 'TypeScript', 'Python', 'Flask', 'MySQL'],
        image: [{dashboard}, {user}]
    }
]

const FeaturedProject = ({summary, title, content, tech, image, git, link}: featuredProjectProps) => {
    return (<>
    
            <ProjectContent>
                <ProjectSummary>Project Summary</ProjectSummary>
                <ProjectTitle>Project Title</ProjectTitle>
                <ProjectDescription>
                    <p>CORO is a programming app for church choirs that allows staff to have a solid management on the music of the church.</p>
                </ProjectDescription>
                <ProjectTech>
                    {techMock.length && 
                    (techMock.map((tech, i) => (<li key={i}>{tech}</li>)))}
                </ProjectTech>
                
            </ProjectContent>

            <ProjectImage>
                <img src={dashboard} alt="dashboard" />
                <img src={user} alt="dashboard" />
            </ProjectImage>
    
    
    </>)
}
export default FeaturedProject