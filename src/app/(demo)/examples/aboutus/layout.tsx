import React from "react";

type Props = {
	children: React.ReactNode;
};

export default function AboutUsLayout({ children }: Props) {
	return (
		<div>
			<h2>section</h2>
			{children}
			<h2>section</h2>
		</div>
	);
}
