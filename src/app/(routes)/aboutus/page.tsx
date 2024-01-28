import React from "react";

type Props = {};

export default async function AboutUs({}: Props) {
	await new Promise((resolve) => setTimeout(resolve, 10000));
	return <div>AboutUs</div>;
}
