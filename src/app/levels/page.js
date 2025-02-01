"use client"

import "../globals.css";
import Image from "next/image";
import KilnLogo from '../../../img/logo_level1.png';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Level0 from "./level0";
import Card from "./card";


export default function Level({ children }) {
	const [level, setLevel] = useState(0);

	useEffect(() => {
		const levelValue = localStorage.getItem('level') || 0;
		setLevel(Number(levelValue));
	}, [])

	return (
		<div className="flex justify-center items-center align-middle w-[100vw] h-[100vh] flex-col">
			<div className="flex justify-center align-middle flex-row w-full h-full">
				<Card description={"fwqfqfqfqwfqfqfq"} name={"Presentation"} className={" bottom-0"} />
				<Card description={"fwqfqfqfqwfqfqfq"} name={"Presentation"} />
			</div>
			<div className="flex flex-row w-full h-full">
				<Card description={"fwqfqfqfqwfqfqfq"} name={"Presentation"} />
				<Card description={"fwqfqfqfqwfqfqfq"} name={"Presentation"} className={""} />
			</div>
			<Image src={KilnLogo} alt="KilnLogo" width={300} height={300} priority className="absolute" />
		</div>
	)
}
