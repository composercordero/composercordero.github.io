import { pink, yellow, blue, green, orange } from "../../Theme";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";


const ColorsDiv = styled.div`
    width: 2rem;
    position: fixed;
    bottom: 7rem;
    left: 2rem;
    right: auto;
    z-index: 10;
    color: ${(props) => props.theme.colors.accentColor[500]};
`;

const ColorsUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
`;

const ColorItem = styled.li`

    button{
        border-radius:50px;
        width: 2rem;
        height: 2rem;
        margin-bottom: 1rem;
        border: none;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover{
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

const colors = [
    {color: 'pink', code: '#ff0080'},
    {color: 'yellow', code: '#ffd900'},
    {color: 'blue', code: '#0088ff'},
    {color: 'green', code: '#00ff91'},
    {color: 'orange', code: '#ff6600'},
    ]

type colorSelectorProps = {
    setCurrentColor:Dispatch<SetStateAction<{
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }>>,
}

const ColorSelector = ({setCurrentColor}: colorSelectorProps) => {

    const handleColor = (color:string) => {
        
        switch(color) {
            case 'yellow':
                setCurrentColor(yellow)
                break;
            case 'blue':
                setCurrentColor(blue)
                break;
            case 'green':
                setCurrentColor(green)
                break;
            case 'orange':
                setCurrentColor(orange)
                break;
            default:
                setCurrentColor(pink)
    }
}
    
    return (<>

        <ColorsDiv>
            <ColorsUl>
                {colors.map((color,i) => (
                    <ColorItem key={i}>
                        <button onClick={() => handleColor(color.color)} style={{backgroundColor:`${color.code}`}}></button>
                    </ColorItem>))}
            </ColorsUl>
        </ColorsDiv>
    
    </>)
    }

export default ColorSelector