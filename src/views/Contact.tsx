import styled, {useTheme} from "styled-components"
import Hero from "../components/global/Hero";
import { Link } from "react-router-dom";
// ant d component
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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
    font-weight: ${props => props.theme.fontWeights.bolder};
    letter-spacing: 1px;
    font-size: ${props => props.theme.fontSizes.l};
    color:${props => props.theme.colors.text};

    a {
    font-size: ${props => props.theme.fontSizes.m};
    }
`;

type TitleProps = {
  direction:any,
  margin:any,
}

const Title = styled(AccentTitle)<TitleProps>`
    margin: 5rem 0 4rem;
    width: 100%; 
    border-bottom: 5px solid #eee; 
    line-height: 0.1rem;
    text-align: ${(props) => props.direction || 'left'};

    span { 
        background:${props => props.theme.colors.body}; 
        padding: ${(props) => props.margin || '0 1rem 0 0'} ;
    }
`;

const ContactDescription = styled.div`
    border-radius: 25px;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: 200;
    line-height: 1.8;
    margin-bottom: 1rem;
    white-space: pre-line;
    text-align: right;
    color: ${props => props.theme.colors.text};
    
    a{text-decoration:none;
      &:hover{
        text-decoration:underline;
        color: ${props => props.theme.colors.accentColor[400]}
      }

    @media (max-width: 1025px) {
      font-size: ${props => props.theme.fontSizes.s};
      }

    @media (max-width: 769px) {
      font-size: ${props => props.theme.fontSizes.s};
      }
    
`;

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    label{
      color:${props => props.theme.colors.text};
      font-size:${props => props.theme.fontSizes.s};
      font-weight:${(props) => props.theme.fontWeights.normal};
      
    }
    
    input{
      width:100%;
      border: 1px solid #eee;
      margin-bottom: 2rem;
      font-size:${props => props.theme.fontSizes.s};
      height: 30px;
    }

    textarea{
      font-size:${props => props.theme.fontSizes.s};
      border: 1px solid #eee;
    }
`;

const FormButton = styled.div`

  input[type='submit']{
    background-color: ${props => props.theme.colors.accentColor[500]};
    color: ${props => props.theme.colors.body};
    font-weight:500;
    padding: 10px 20px;
    border-radius: 25px;
    border: none;
    transition: 0.2s ease;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.theme.colors.accentColor[400]};
    }
  }
`;

const info = {
  accent: 'Let\'s keep talking,',
  title: 'Find out if JavaScript loves me back (😏)',
  content: 'JS knows I\'ve dated Python and MySQL, but JS is fine. We sit down and spend hours crafting plans, apps, and projects that let us get to know each other while helping the people around us. Isn\'t that cool? I think so.'
}

const Contact = () => {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolio12345', 'portfolio', form.current, 'AGxAhxEkCJLK3KNxZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  const prop = useTheme()

  return (
    <Container>
            <Hero accent={info['accent']} title={info['title']} content= {info['content']}/>
            <Title direction={'right'} margin={'0 0 0 1rem'}><span>Looking for a team</span></Title>
            <ContactDescription>
              <p>I met these handsome programming languages through Coding Temple, but that was only the beginning! We are looking for a new place to get to know each other in a deeper way. We want to be part of a team that works hard to produce professional, clean, meaningful solutions for their customer and their audiences. </p>
              <br/>
              
              <p>Let's create <Link to="/projects" style={{color:prop.colors.accentColor[500], fontWeight:prop.fontWeights.bold}}>awesome things</Link>, please send me an email at <Link to="mailto:composer.cordero@gmail.com" style={{color:prop.colors.accentColor[500], fontWeight:prop.fontWeights.bold}}>composer.cordero@gmail.com</Link>, connect with me on my <Link to="https://www.instagram.com/composercordero/" target="_blank" style={{color:prop.colors.accentColor[500], fontWeight:prop.fontWeights.bold}}>social media</Link>, or fill the form below! I would love to start a conversation and talk about my love for these languages.</p>
            </ContactDescription>

            <Title ><span>Contact me</span></Title>
            <form ref = {form} onSubmit = {sendEmail}>
              
              <StyledForm>
              <label>Name</label>
                <input type="text" name="name" />
              <label>Email</label>
                <input type="email" name="email" />
              <label>Message</label>
                <textarea rows={4} name="message" />
              </StyledForm>

              <FormButton>
                <input type="submit" value="Send" />
              </FormButton>
            </form>
        </Container>
  )
}
export default Contact