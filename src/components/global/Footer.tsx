import styled, {useTheme} from "styled-components";
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from "@ant-design/icons";

type footerProps = {
}

const FooterDiv = styled.div`
    flex:none;
    font-size: ${props => props.theme.fontSizes.xs};
    padding: 2rem 0;
    margin-top: 2rem;
    border-top: 1px solid #eee;
`;

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;

    @media (max-width: 768px) {
        flex-wrap: nowrap;
    }
`;

const Item = styled.p`
    padding-right: 4rem;
    margin: 0;
`;

const Icons = styled.div`
    display: flex;
    column-gap: 1rem;
    margin-left: auto;
    padding-right: 0
    fill: currentcolor;
    font-size: ${props => props.theme.fontSizes.m};

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.text};
        transition: 0.2s ease;
    };
    a:hover{
        color: ${props => props.theme.colors.accentColor[500]};
    }
`;

const ScreenReadersOnly = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
`;

const Footer = ({}: footerProps) => {
    const props = useTheme();

return (<>

    <FooterDiv>
        <StyledFooter>
            <Item>
                <strong>© 2023</strong><br /><p>Carlos Cordero</p>
            </Item>

            <Item>
                <strong>Email</strong><br /><p><a href="mailto:composer.cordero@gmail.com" style={{color:`${props.colors.accentColor[500]}`}}>composer.cordero@gmail.com</a></p>
            </Item>

            <Icons >
                <a><ScreenReadersOnly /></a>
                <a href="https://github.com/composercordero" target="_blank"><GithubOutlined /></a>
                <a href="https://www.linkedin.com/in/composercordero/" target="_blank"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/composercordero/" target="_blank"><InstagramOutlined /></a>
                
            </Icons>

        </StyledFooter>
    </FooterDiv>
</>)
}
export default Footer