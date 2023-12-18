import React from "react";

type Props = {
	params: { id: string };
};

export default function Products({ params }: Props) {
	return <div>Products: {params.id}</div>;
}
