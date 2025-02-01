"use client"

import "../globals.css";
import Image from "next/image";
import KilnLogo from '../../../public/kiln-logo.jpg';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Level({ children }) {
	const [level, setLevel] = useState(1);

	useEffect(() => {
		const levelValue = localStorage.getItem('level') || 0;
		setLevel(Number(levelValue));
	}, [])

	return (
		<div className="flex justify-center items-center align-middle w-[100vw] h-[100vh] flex-col">
			{level}
			<div className="flex justify-center align-middle flex-row w-full h-full ">
				<div className="flex justify-center items-center h-full cursor-pointer [transform:perspective(800px)_rotateY(10deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] w-full sm:w-84 p-5 rounded-lg shadow-lg group duration-300">
					<div className="card bg-base-100 image-full left-[-75px]  h-[85%] shadow-xl">
						<figure>
							<img
								src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
								alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center w-full h-full">
					<button className="btn btn-primary"> </button>
				</div>
			</div>
			<div className="flex flex-row w-full h-full">
				<div className="flex justify-center items-center w-full h-full">
					<button className="btn btn-primary"> </button>
				</div>
				<div className="flex justify-center items-center w-full h-full">
					<button className="btn btn-primary"> </button>
				</div>
			</div>
			<Image src={KilnLogo} alt="KilnLogo" width={300} height={300} priority className="absolute" />
		</div>
	);
}
