import styled from "styled-components"


const ProjectContent = styled.div`
`;

const ProjectImage = styled.div`
display: flex;
justify-content: start;
gap: 4rem;
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
    color: ${props => props.theme.colors.accentColor[500]};
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.bold};

    text-transform:uppercase;
`;

const ProjectTitle = styled.h1`
    font-size: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
    font-weight: ${props => props.theme.fontWeights.bolder};
    }
`;

const ProjectDescription = styled.div`
    position: relative;
    border-radius: 25px;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.light};
    line-height: 1.8;
    margin-bottom: 1rem;
    white-space: pre-line;
    color: ${props => props.theme.colors.text};
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
        font-weight: ${props => props.theme.fontWeights.bold};
        padding: 0.3rem 0.875rem;
        border-radius: 25px;
        color: ${props => props.theme.colors.accentColor[500]};
        border: 1px solid ${props => props.theme.colors.accentColor[500]};
        background:0 0;
    }

    li:hover{
        background-color: ${props => props.theme.colors.accentColor[500]};
        color: ${props => props.theme.colors.body};
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