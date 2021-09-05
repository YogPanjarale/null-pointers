import { useRouter } from "next/router";
import styled from 'styled-components'

const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 0.4rem 2rem;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);

	ul{
		margin-left: 1rem;
		display: flex;
	}
	ul li{
		list-style: none;
		margin: 0rem 0.7rem;
	}
	ul li a{
		text-decoration: none;
		color: grey;
		transition: all 0.2s;
	}
	ul li a:hover{
		color: #4D4D4D;
		cursor: pointer;
	}
`
const Container = styled.div`
	flex-basis: 15%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	
`
const Container2 = styled(Container)`
	gap: 3.5rem;
`
const Logo = styled.p`
	font-weight: bold;
`
const ProfilePic = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: whitesmoke;
	border: none;
`
const Button = styled.button`
	border: none;
	border-radius: 4px;
	padding: 0.4rem 1rem;
	background-color: #FCB6DB;
	font-family: "Poppins", sans-serif;
	transition: all 0.2s;

	&:hover{
		background-color: #FA88C4;
	}
`
const ProfileContainer = styled.div`
	display: flex;
	/* border: 2px solid red; */
	align-items: center;
	justify-content: center;
	margin-top: 4rem;
	gap: 3.2rem;

`
const MainPic = styled.div`
	height: 150px;
	width: 150px;
	background-color: whitesmoke;
	border-radius: 50%;
`
const UserInfoContainer = styled.div``
const Username = styled.h1``
const UserInfo = styled.p`
	color: grey;
`
const FollowButton = styled(Button)`
	font-weight: 600;
	letter-spacing: 1px;
	background-color: #CECCCD;
	font-size: 0.9rem;

	&:hover{
		background-color: #C1BFC0;
	}
`

const Index = () => {
	const router = useRouter();
	const { username } = router.query;
	return(
		<>
		<Navbar>
			<Container>
				<Logo>roadmappr</Logo>
				<ul>
					<li><a>Profile</a></li>
					<li><a>Make</a></li>
				</ul>
			</Container>
			<Container2>
				<ProfilePic></ProfilePic>
				<Button>Upload</Button>
			</Container2>

		</Navbar>
		<ProfileContainer>
			<MainPic></MainPic>
			<UserInfoContainer>
				<Username>Krishna</Username>
				<UserInfo>Hello I &apos; m a frontend developers :)</UserInfo>
				<FollowButton>+ Follow</FollowButton>
			</UserInfoContainer>
		</ProfileContainer>
		</>
	);
};

export default Index;
