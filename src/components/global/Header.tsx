import { Dispatch, SetStateAction } from "react";
import { Space } from "antd"
import { Switch } from 'antd';
import { Sun, Moon } from "react-bootstrap-icons";
import carlos from "../../assets/carlos.jpeg"
import styled from "styled-components";

type headerProps = {
    isDarkTheme: boolean,
    theme:boolean,
    setTheme:Dispatch<SetStateAction<boolean>>,
}

const StyledHeader = styled.section`
    display: inline-flex;
    width: 90%;
    justify-content: space-between; 
    padding: 3.5rem 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
`;

const StyledMenu = styled.section`
    display: flex;
    align-items: center;
    column-gap: 2rem;
`;

const Header = ({isDarkTheme, theme, setTheme}: headerProps) => {

    const handleTheme = () => {
        setTheme(!theme)
        console.log(`switch to ${isDarkTheme}`);
    };

return (<>
    <StyledHeader>
        <a href="/" style={{display:'flex', alignItems:'center'}}>
            <img src={carlos} alt="Carlos" width={48} height={48} style={{borderRadius: '50%',marginRight:'0.5rem'}}/>
            <span>
                <h1>Carlos Cordero</h1>
            </span>
        </a>

        <div>
            <nav style={{display:'flex', alignItems:'center'}}>
                {/* <button></button> */}
                <StyledMenu>
                    <ul style={{display:'flex', alignItems:'center', columnGap:'2rem',}}>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </StyledMenu>
                <div></div>
            </nav>

            <Moon />
            <Switch defaultChecked onChange={handleTheme} />
            <Sun />
        </div>
    </StyledHeader>
</>)
}
export default Header