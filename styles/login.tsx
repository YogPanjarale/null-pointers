import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  @media(max-width: 1250px){
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
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
  `;
export const LeftInner = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Heading = styled.h1`
font-size: 3rem;
font-weight: 600;
width: 118%;
`;
export const Subtext = styled.p`
  width: 90%;
  color: grey;
  font-size: 1rem;
  line-height: 1.9rem;
  margin-top: -2.5rem;
  margin-bottom: 2rem;
  
  `;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* max-width: 25rem; */
  `;
export const LoginInput = styled.input`
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
  `;
export const Button = styled.button`
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
  `;
export const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
  box-sizing: border-box;
  margin-top: 1rem;
  height: 4rem;
`;
export const Logos = styled.div`
  flex-basis: 33%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover{
    border: 1px solid #1F28EB;
  }
  `;
export const Line = styled.div`
  width: 33%;
  border-top: 1px solid grey;
  opacity: 0.8;
  `;
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 0.4rem;
  `;
export const Text = styled.span`
  color: grey;
  `;
export const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  `;
export const RightContainer = styled.div`
  background-color: #1F28EB;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  `;
export const RightInner = styled.div`
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
`;
export const RightHeading = styled.p`
  color: white;
  font-size: 4.4rem;
  line-height: 5rem;
  width: 300px;
  font-weight: 600;
  z-index: 2;
`;
export const RightSubText = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #D4D4D4;
  line-height: 1.7rem;
  width: 400px;
  margin-left: auto;
  `;
export const RightSubTextContainer = styled.div`
`;
export const ExampleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const ProfilePic = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #92F8E0; 
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 5rem;
`;
export const InfoBold = styled.h4`
  font-size: 1rem;
  color: #D4D4D4;
`;
export const Info = styled.p`
  font-size: 1rem;
  margin-top: -1rem;
  color: #D4D4D4;
`;
export const Line2 = styled.div`
  border-left: 2px solid grey;
  opacity: 0.4;
  transform: translate(0.4rem, 4rem);
  position: absolute;
  z-index: 1;
  width: 2px;
  height: 60%;
`;
