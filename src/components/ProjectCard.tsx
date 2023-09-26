import styled from "styled-components"
import { GithubOutlined, RightCircleOutlined } from "@ant-design/icons";

const ListElement = styled.li`
    position: relative;
    cursor: default;
    margin-bottom: 4rem;
`;

const ProjectCardInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem 1.875rem;
    border-radius: 25px;
    height: 100%;
    background-color: #ff0080;
    position: relative;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    overflow: auto;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
`;

const ProjectHeader = styled.div`
    display: flex;
    flex: 0;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    margin: 1rem 0;

    a{
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        
    &:before{
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
    }
    }
`;

const ProjectDescription = styled.div`
    color: #fff;
    font-size: 1rem;
    font-weight: 200;
    flex: 1;
    flex-

`;

const ProjectFooter = styled.div``;

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
        color: #fff;
        border: 1px solid #fff;
        background:0 0;
    }
`;

type projectCardProps = {
    title: string,
    description: string,
    tech: string[],
    link:string,
}

const ProjectCard = ({title, description, tech, link}: projectCardProps) => {
  return (
    <ListElement>
    <ProjectCardInner>

        <ProjectHeader>
            <div> <RightCircleOutlined style={{ fontSize:'2rem', width:'40px', height:'40px', color: '#fff'}}/> </div>
            <div> <GithubOutlined style={{ fontSize:'2rem', width:'40px', height:'40px', color: '#fff'}}/> </div>
        </ProjectHeader>

            <ProjectTitle>
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            </ProjectTitle>

        <ProjectDescription>
            <p>{description}</p>
        </ProjectDescription>

        <ProjectFooter>
            <ProjectTech>
                {tech.map((item, i) => 
                    (<li key={i}>{item}</li>)
                )}
            </ProjectTech>
        </ProjectFooter>

    </ProjectCardInner>
    </ListElement>
  )
}
export default ProjectCard