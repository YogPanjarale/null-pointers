import { ImQuotesLeft } from 'react-icons/im';
import React, {useEffect, useState}  from 'react'
import { Body, LeftContainer, LeftInner, Heading, Subtext, InputContainer, LoginInput, Button, OptionsContainer, Line, Text, LogoContainer, Logos, LogoImage, RightContainer, RightInner, Line2, RightHeading, RightSubTextContainer, RightSubText, ExampleContainer, ProfilePic, InfoContainer, InfoBold, Info } from '../styles/login';
import {GoogleAuthProvider ,getAuth, signInWithPopup} from 'firebase/auth'
const provider = new GoogleAuthProvider();
function Login() {

  const [show, setShow] = useState(false)
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  useEffect(() => {

  })
  // const signUpWithEmailandPassword= ()=>{

  // }
  const signUp=()=>{
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
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
              {show === true && <LoginInput placeholder="Username" ></LoginInput>}
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
              {/* <button onClick={signUp}/> */}
              <Logos onClick={signUp}><LogoImage src={'https://cdn.discordapp.com/attachments/837180379072823297/883391111186489405/google.png'}/></Logos>
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