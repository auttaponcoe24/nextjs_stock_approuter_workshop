"use client";
export const dynamic = "force-dynamic";
import * as React from "react";
import Box from "@mui/material/Box";

type Props = {
	children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
	return (
		<section>
			<Box sx={{ display: "flex" }}>
				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
					{children}
				</Box>
			</Box>
			{/* {children} */}
		</section>
	);
}
