import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Stock({}: Props) {
	return (
		<>
			{/* <div style={{ marginTop: 200 }}>page</div> */}
			<Box sx={{ mt: 1 }}>
				Stock
				<Image
					src="/static/img/next_login.jpg"
					// src="https://www.codemobiles.com/biz/images/codemobiles_logo.svg?ref=10"
					width={100}
					height={35}
					alt="logo"
					style={{ objectFit: "contain" }}
				/>
			</Box>
		</>
	);
}
