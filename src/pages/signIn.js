import Link from "next/link";
import { AiFillEye } from "react-icons/ai"


function access() {
	return (
		<form>
			<div className="m-[10vw] flex flex-col gap-5  p-8 border rounded-xl shadow-2xl items-center lg:w-max ">
				<h1 className=" font-bold text-2xl">login/<Link href="1">
					sigin</Link></h1>

				<div id="login">
					{/* login */}
					<input type="text" name="username " placeholder="username"
						className=" border-b-2 w-[100%] my-6" />
					<input type="password" name="password " placeholder="password"
						className="border-b-2 w-[100%] my-6" />
					<AiFillEye
						className=" float-right -top-11 relative"
					></AiFillEye>
					<div>
						<input type="checkbox" />
					</div>
					<div className=" flex flex-col gap-2 font-thin text-blue-800">
						<Link href="2">
							register
						</Link>
						<Link href="3">
							?forgot password
						</Link>
					</div>

					<button
						className="bg-blue-700 py-3 px-9 mt-10 text-white"
					>login</button>



				</div>
			</div>{/* register */}
			<div >
				<h1 className=" text-3xl text-center">NULMAT {""} </h1>
				<div className=" p-7 flex flex-col lg:mx-[10rem]">
					<input type="text" placeholder="full name" className="input-container" />
					<input type="email" placeholder="email" className="input-container" />
					<input type="text" placeholder="adress1" className="input-container" />
					<input type="text" placeholder="adress2" className="input-container" />
					<input type="tel" placeholder="phone" className="input-container" />
					<input type="tel" placeholder="phone2" className="input-container" />

					<div><input type="checkbox" />
						<button className="float-right bg-blue-800 px-6 py-3 text-white w-max">register</button>
					</div>

				</div>
			</div>
		</form>
	);
}
export default access;
