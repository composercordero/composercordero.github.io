import styled from "styled-components"
import Hero from "../components/global/Hero";
import { Link } from "react-router-dom";
// ant d component
import {Form, Input, } from 'antd';

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
    text-align: right;
    
`;

const FormButton = styled.button`
    background-color: #ff0080;
    color: #fff;
    font-weight:500;
    padding: 10px 20px;
    border-radius: 25px;
    border: none;
    transition: 0.2s ease;
    cursor: pointer;

    &:hover{
      background-color: #ff3399;
    }
`;

const info = {
  accent: 'Let\'s keep talking,',
  title: 'Find out if JavaScript loves me back (😏)',
  content: 'JS knows I\'ve dated Python and MySQL, but JS is fine. We sit down and spend hours crafting plans, apps, and projects that let us get to know each other while helping the people around us. Isn\'t that cool? I think so.'
}

const Contact = () => {
  const [form] = Form.useForm<{ name: string; email: string; message:string }>();
  const { TextArea } = Input;

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Container>
            <Hero accent={info['accent']} title={info['title']} content= {info['content']}/>
            <Title direction={'right'} margin={'0 0 0 1rem'}><span>Looking for a team</span></Title>
            <ContactDescription>
              <p>I met these handsome programming languages through Coding Temple, but that was only the beginning! We are looking for a new place to get to know each other in a deeper way. We want to be part of a team that works hard to produce professional, clean, meaningful solutions for their customer and their audiences. </p>
              <br/>
              
              <p>Let's create <Link to="/projects" style={{color:'#ff0080', fontWeight:'500'}}>awesome things</Link>, please send me an email at <Link to="mailto:composer.cordero@gmail.com" style={{color:'#ff0080', fontWeight:'500'}}>composer.cordero@gmail.com</Link>, connect with me on my <Link to="https://www.instagram.com/composercordero/" target="_blank" style={{color:'#ff0080', fontWeight:'500'}}>social media</Link>, or fill the form below! I would love to start a conversation and talk about my love for these languages.</p>
            </ContactDescription>

            <Title ><span>Contact me</span></Title>

            <Form form={form} 
              name="contact" 
              layout="vertical" 
              autoComplete="off"
              validateMessages={validateMessages}
              onFinish={onFinish}>
            
            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={['user', 'message']} label="message" rules={[{ required: true }]}>
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item >
              <FormButton htmlType="submit">Send</FormButton>
            </Form.Item>
            </Form>

        </Container>
  )
}
export default Contact