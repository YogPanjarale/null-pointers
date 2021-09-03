// import './index.css'
import styled from 'styled-components';
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
  `
const LeftInner = styled.div`
  /* border: 2px solid red; */
  max-width: 450px;
  /* width: max-content; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const RightContainer = styled.div`
  background-color: #1F28EB;
  flex-basis: 50%;
`
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
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
  gap: 2.5rem;
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

function App() {
  return (
    <div className="App">
      <Body>
        <LeftContainer>
          <LeftInner>
            <Heading>Welcome to RoadMappr</Heading>
            <Subtext>Helping you find or pave the way for others to learn whatever you want,share your roadmaps or your journy on an amazing interactive platfrom</Subtext>
            <InputContainer>
              <LoginInput placeholder="example@email.com"></LoginInput>
              <LoginInput placeholder="6+ strong character"></LoginInput>
              <Button>Create an account</Button>
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
        <RightContainer></RightContainer>
      </Body>
    </div>
  );
}

export default App;