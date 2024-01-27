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

	// const router = useRouter();
	// const path = usePathname();
	// const userReducer = useSelector(userSelector);

	return <div>{children}</div>;
}
