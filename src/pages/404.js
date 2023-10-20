
import Style from "../styles/Home.module.css"
import { BiErrorCircle } from "react-icons/bi";

export default function pageNotFound() {
	return (
		<div className="text-center">
			<BiErrorCircle size={600} className={Style.icon}></BiErrorCircle>

			<p>oops!!! sorry something went wrong </p>
		</div>
	);
}
