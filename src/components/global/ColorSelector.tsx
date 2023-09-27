import { pink, yellow, blue, green, orange, purple } from "../../Theme";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";


const ColorsDiv = styled.div`
    width: 2rem;
    position: fixed;
    top: 50%;
    left: 2rem;
    right: auto;
    margin-top: -144px;
    z-index: 10;
    color: ${(props) => props.theme.colors.accentColor[500]};

    @media (max-width: 1080px){
        display: none;
    }
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
        border-radius: 10px;
        width: 2rem;
        height: 2rem;
        margin-bottom: 1rem;
        border: none;
        cursor: pointer;
        transition: 0.2s ease;
        
        &:hover{
            width: 2.5rem;
            height: 2.5rem;
            animation: 0.3s infinite alternate bounce;
            
            @keyframes bounce {
                from {
                margin-left: 0;
            }
            
            to {
                margin-left: 2rem;
            }
            }
        }
    }
`;

const colors = [
    {color: 'pink', code: pink[500]},
    {color: 'yellow', code: yellow[500]},
    {color: 'blue', code: blue[500]},
    {color: 'green', code: green[500]},
    {color: 'orange', code: orange[500]},
    {color: 'purple', code: purple[500]},
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
            case 'purple':
                setCurrentColor(purple)
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