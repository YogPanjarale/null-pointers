import styled from 'styled-components';
import { ImQuotesLeft } from 'react-icons/im';
import {useState}  from 'react'

const Body = styled.div`
  display: flex;
  @media(max-width: 1250px){
    flex-direction: column;
  }
`
const LeftContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .account_container{
    display: flex;
    gap: 0.5rem;
    margin-top: -1rem;
  }
  .sign_in{
    color: blue;
    transition: all 0.2s;
  }
  .sign_in:hover{
    color: lightblue
  }
  `
const LeftInner = styled.div`
  /* border: 2px solid red; */
  max-width: 450px;
  /* width: max-content; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Heading = styled.h1`
font-size: 3rem;
font-weight: 600;
width: 118%;
`
const Subtext = styled.p`
  width: 90%;
  color: grey;
  font-size: 1rem;
  line-height: 1.9rem;
  margin-top: -2.5rem;
  margin-bottom: 2rem;
  
  `
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* max-width: 25rem; */
  `
const LoginInput = styled.input`
  padding: 1.4rem 1rem;
  border-radius: 7px;
  border: 1.5px solid grey;
  transition: all 0.4s;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  color: grey;
  outline: none;

  
  &:focus{
    border: 2px solid #1F28EB;
  }
  &::placeholder{
    font-size: 0.9rem;
    font-family: 'Poppins', sans-serif;
  }
  `
const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #1F28EB;
  border: none;
  padding: 1.31rem 1rem;
  border: 2px solid #1F28EB;
  border-radius: 7px;
  color: white;
  font-size: 1rem;
  transition: all 0.4s;
  &:hover{
    background-color: transparent;
    color: #1F28EB;
  }
  `
const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
  box-sizing: border-box;
  margin-top: 1rem;
  height: 4rem;
`
const Logos = styled.div`
  flex-basis: 33%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const Line = styled.div`
  width: 33%;
  border-top: 1px solid grey;
  opacity: 0.8;
  `

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 0.4rem;
  `
const Text = styled.span`
  color: grey;
  `
const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  `
const RightContainer = styled.div`
  background-color: #1F28EB;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  `
const RightInner = styled.div`
  width: 500px;

  .quotes_logo{
    font-size: 3.5rem;
    color: #1F28EB;
    background-color: #92F8E0;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 1rem 1rem;
    transform: translate(-1.5rem, 0rem);
  }
`
const RightHeading = styled.p`
  color: white;
  font-size: 4.4rem;
  line-height: 5rem;
  width: 300px;
  font-weight: 600;
  z-index: 2;
`
  
const RightSubText = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #D4D4D4;
  line-height: 1.7rem;
  width: 400px;
  margin-left: auto;
  `
const RightSubTextContainer = styled.div`
`
const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const ProfilePic = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #92F8E0; 
`
const InfoContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  justify-content: space-around;
  margin-right: 5rem;
`
const InfoBold = styled.h4`
  font-size: 1rem;
  color: #D4D4D4;
`
const Info = styled.p`
  font-size: 1rem;
  margin-top: -1rem;
  color: #D4D4D4;
`
const Line2 = styled.div`
  border-left: 2px solid grey;
  opacity: 0.4;
  transform: translate(0.4rem, 4rem);
  position: absolute;
  z-index: 1;
  width: 2px;
  height: 60%;
`

function Login() {

  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Body>
        <LeftContainer>
          <LeftInner>
            <div className="account_container">
              <div className="have_an_account">Already have an account? </div>
              <div className="sign_in" onClick={() =>{
                setShow(!show)
              }}>Sign in</div>
            </div>
            <Heading>Welcome to RoadMappr</Heading>
            <Subtext>Helping you find or pave the way for others to learn whatever you want,share your roadmaps or your journey on an amazing interactive platfrom</Subtext>
            <InputContainer>
              {show === true && <LoginInput placeholder="Username"></LoginInput>}
              {show === false && <LoginInput placeholder="example@email.com"></LoginInput>}
              <LoginInput placeholder="6+ strong character"></LoginInput>
              <Button>{show === false ? 'Create an account' : 'Sign in'}</Button>
            </InputContainer>
            <OptionsContainer>
              <Line> </Line>
              <Text>or sign up with</Text>
              <Line> </Line>
            </OptionsContainer>
            <LogoContainer>
              <Logos><LogoImage src={'https://cdn.discordapp.com/attachments/837180379072823297/883391111186489405/google.png'}/></Logos>
              <Logos><LogoImage src={'https://cdn.discordapp.com/attachments/837180379072823297/883391109055782932/github.png'}/></Logos>
              <Logos><LogoImage src={'https://cdn.discordapp.com/attachments/837180379072823297/883391106874765383/apple.png'}/></Logos>
            </LogoContainer>
          </LeftInner>
        </LeftContainer>
        <RightContainer>
          <RightInner>
            <Line2/>

            <ImQuotesLeft className="quotes_logo"/>
            <RightHeading>Make a Dream</RightHeading>
            <RightSubTextContainer>
              <RightSubText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</RightSubText>
              </RightSubTextContainer>
              <ExampleContainer>
                  <ProfilePic></ProfilePic>
                <InfoContainer>
                  <InfoBold>Krishna Dhignra</InfoBold>
                  <Info>Frontend Developer</Info>
                </InfoContainer>
              </ExampleContainer>
              
          </RightInner>
        </RightContainer>
      </Body>
    </div>
  );
}

export default Login;