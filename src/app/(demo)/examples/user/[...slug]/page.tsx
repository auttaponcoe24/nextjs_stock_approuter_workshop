import React from "react";

type Props = {
	params: { slug: string[] };
};

export default function page({ params }: Props) {
	return (
		<div>
			User:{" "}
			<ul>
				<li>{params.slug[0]}</li>
			</ul>
		</div>
	);
}
