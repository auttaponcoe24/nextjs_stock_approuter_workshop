"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { store } from "@/src/store/store";
import { useSelector } from "react-redux";
import { getSession, userSelector } from "@/src/store/slices/userSlice";
import { Box } from "@mui/material";

type Props = {
	children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
	useEffect(() => {
		store.dispatch(getSession());
	}, []);

	const router = useRouter();
	const path = usePathname();
	const userReducer = useSelector(userSelector);

	// // is fetching session (eg. show spiner)
	// if (userReducer.isAuthenticating) {
	// 	// return null;
	// 	return (
	// 		<Box className="flex justify-center items-center h-screen">
	// 			Loading..
	// 		</Box>
	// 	);
	// }

	// // If user is not logged in, return login component
	// if (path !== "/login" && path !== "/register") {
	// 	if (!userReducer.isAuthenticated) {
	// 		router.push(`/login`);
	// 		// return null;
	// 		return <Box>Loading..</Box>;
	// 	} else if (path == `/`) {
	// 		router.push(`/stock`); //default page after login when call root path
	// 		// return null;
	// 		return <Box>Loading..</Box>;
	// 	} else {
	// 		if (userReducer.isAuthenticated) {
	// 			router.push(`/stock`); // default page after login
	// 			return <Box>Loading..</Box>;
	// 		}
	// 	}
	// }

	return <div>{children}</div>;
}
