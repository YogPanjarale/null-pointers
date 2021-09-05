import { useRouter } from "next/router";
import styled from 'styled-components'
import { Button, Navbar, Container, Logo, Container2, ProfilePic, ProfileContainer, MainPic, UserInfoContainer, Username, UserInfo,FollowButton } from "./Navbar";


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
