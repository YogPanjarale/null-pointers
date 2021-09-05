import Login from "./login";
import Index from "./[username]/index";
import {  app } from "../utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
export default function Home() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	});
	return (
		<>
      {user ? <Index /> : <Login />}
		</>
	);
}
