import styled from 'styled-components';


export const Navbar = styled.nav`
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
`;
export const Container = styled.div`
	flex-basis: 15%;
	display: flex;
	justify-content: center;
	flex-direction: row;
	
	`;
export const Container2 = styled(Container)`
	gap: 3.5rem;
	`;
export const Logo = styled.p`
	font-weight: bold;
	`;
export const ProfilePic = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: whitesmoke;
	border: none;
	`;
export const Button = styled.button`
	border: none;
	border-radius: 4px;
	padding: 0.4rem 1rem;
	background-color: #FCB6DB;
	font-family: "Poppins", sans-serif;
	transition: all 0.2s;
	
	&:hover{
		background-color: #FA88C4;
	}
	`;
export const ProfileContainer = styled.div`
	display: flex;
	/* border: 2px solid red; */
	align-items: center;
	justify-content: center;
	margin-top: 4rem;
	gap: 3.2rem;
	
	`;
export const MainPic = styled.div`
	height: 150px;
	width: 150px;
	background-color: whitesmoke;
	border-radius: 50%;
	`;
export const UserInfoContainer = styled.div``;
export const Username = styled.h1``;
export const UserInfo = styled.p`
	color: grey;
`;
	export const FollowButton = styled(Button)`
		font-weight: 600;
		letter-spacing: 1px;
		background-color: #CECCCD;
		font-size: 0.9rem;
	
		&:hover{
			background-color: #C1BFC0;
		}
	`
