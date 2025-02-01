import React from 'react'

export default function Card({ name, description, className}) {
	return (
		<div className="flex justify-center items-center h-full w-full ">
			<div className={className + " cursor-pointer w-max sm:w-84 p-5 scale-[100%] group duration-300 card bg-base-100 image-full h-[85%] shadow-xl"}>
				<figure>
					<img
						src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
						alt="Shoes" />
				</figure>
				<div className="card-body">
					<h1 className="card-title text-xl justify-center text-gray-200">{name}</h1>
					<p className=" text-white">{description}</p>
					{/* <div className="card-actions justify-end">
				<button className="btn btn-primary">Buy Now</button>
			</div> */}
				</div>
			</div>
		</div>
	)
}
