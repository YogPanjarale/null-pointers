import { useRouter } from "next/router";

//react functional component
const Post = () => {
	const router = useRouter();
	const { post, username } = router.query;
	return (
		<h1>
			This is {post} roadmap by User:{username}
		</h1>
	);
};

export default Post;
