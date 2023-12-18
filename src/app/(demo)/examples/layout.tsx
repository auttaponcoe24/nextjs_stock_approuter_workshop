import React from "react";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
};

export default function layout({ children }: Props) {
	return (
		<div>
			<nav>
				{/* <a href="/examples/dashboard">Dashboard</a>
				<a href="/examples/aboutus">AboutUs</a> */}
				<Link href="/examples/aboutus">AboutUs | </Link>

				<Link href="/examples/dashboard">dashboard</Link>
				{children}
			</nav>
		</div>
	);
}
