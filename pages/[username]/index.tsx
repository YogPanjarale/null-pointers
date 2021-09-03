import { useRouter } from "next/router";

//react functional component
const Index = () => {
	const router = useRouter();
	const { username } = router.query;
	return <h1>This is userprofile for User: {username}</h1>;
};

export default Index;
