import styled from "styled-components"


const ProjectContent = styled.div`
`;

const ProjectImage = styled.div`
display: flex;
justify-content: start;
gap: 1rem;
margin-top: 1rem;
margin-bottom: 1rem;
padding-bottom: 2rem;

img{
    width: 100%;
    height: 100%;
    border-radius:25px;
    padding: 0;
    margin: 0;
    max-width: none;
}
`;

const ImageContainer = styled.div`
    box-shadow: 0px 0px 20px #e9e9e9;
    border-radius:25px;
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
    border-radius: 25px;
    font-size: 1.125rem;
    font-weight: 200;
    line-height: 1.8;
    margin-bottom: 1rem;
    white-space: pre-line;
}
`;

const ProjectTech = styled.ul`
    display:flex;
    flex-wrap: wrap;
    position:relative;
    margin: 1rem 0;
    padding: 0;
    list-style: none;

    li{
        margin: 0 1rem 0.5rem 0;
        font-size: 0.875rem;
        font-weight: 400;
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
    tech:string[],
    image:string[][],
}

const FeaturedProject = ({summary, title, content, tech, image}: featuredProjectProps) => {
    return (<>
    
            <ProjectContent>
                <ProjectSummary>{summary}</ProjectSummary>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>
                <ProjectTech>
                    {tech.length && 
                    (tech.map((item, i) => (<li key={i} >{item}</li>)))}
                </ProjectTech>
                    <p>{content}</p>
                </ProjectDescription>
                
            </ProjectContent>

            <ProjectImage>
                {image && (
                    image.map((img, i) => (
                    <ImageContainer key={i}><img  src={img[0]} alt={img[1]} /></ImageContainer>
                    ))
                )}
            </ProjectImage>
    </>)
}
export default FeaturedProject