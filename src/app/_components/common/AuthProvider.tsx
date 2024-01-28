"use client";
import React, { useEffect } from "react";
import { store } from "@/src/store/store";
import { getSession } from "@/src/store/slices/userSlice";

type Props = {
	children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
	useEffect(() => {
		store.dispatch(getSession());
	}, []);

	return <div>{children}</div>;
}
