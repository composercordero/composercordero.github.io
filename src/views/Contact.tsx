import styled from "styled-components"
import Hero from "../components/global/Hero";
import { Link } from "react-router-dom";

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
    text-align: ${(props) => props.direction || 'left'};

    span { 
        background:#fff; 
        padding: ${(props) => props.margin || '0 1rem 0 0'} ;
    }
`;

const ContactDescription = styled.div`
    border-radius: 25px;
    font-size: 1.125rem;
    font-weight: 200;
    line-height: 1.8;
    margin-bottom: 1rem;
    white-space: pre-line;
}
`;
const info = {
  accent: 'Let\'s keep talking,',
  title: 'Find out if JavaScript loves me back (😏)',
  content: 'JS knows I\'ve dated Python and MySQL, but JS is fine. We sit down and spend hours crafting plans, apps, and projects that let us get to know each other while helping the people around us. Isn’t that cool? I think so.'
}

type contactProps = {

}

const Contact = (props: contactProps) => {
  return (
    <Container>
            <Hero accent={info['accent']} title={info['title']} content= {info['content']}/>
            <Title><span>Looking for a team</span></Title>
            <ContactDescription>
              <p>I met these handsome programming languages through Coding Temple, but that was only the beginning! We are looking for a new place to get to know each other in a deeper way. We want to be part of a team that works hard to produce professional, clean, meaningful solutions for their customer and their audiences. </p>
              <br/>

              <p>If you are interested in giving us a platform to create <Link to="/projects" style={{color:'#ff0080', fontWeight:'500'}}>awesome things</Link>, please send me an email at <a href="mailto:composer.cordero@gmail.com" style={{color:'#ff0080'}}>composer.cordero@gmail.com</a>, connect with me on my <Link to="https://www.instagram.com/composercordero/" target="_blank" style={{color:'#ff0080', fontWeight:'500'}}>social media</Link>, or fill the form below! I would love to start a conversation and talk about my love for these languages.</p>
            </ContactDescription>

            <Title direction={'right'} margin={'0 0 0 1rem'}><span>Contact me</span></Title>


        </Container>
  )
}
export default Contact