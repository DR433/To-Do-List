import PropTypes from "prop-types"
import {useState, useEffect} from "react"
import MonthlySubs from "./MonthlySubs"
import AnnuallySubs from "./AnnuallySubs"

function Subscription(props) {
	const {theme} = props
	const [style, setStyle] = useState({
		backgroundColor: "white",
		color: "black",
	})
	let element = document.getElementById("subsPagesChanges")

	const changeSubsPageToMonthly = (e) => {
		e.target.style.backgroundColor = "rgb(99 102 241)"
		e.target.nextElementSibling.style.backgroundColor = "white"
		if (!element.lastElementChild.classList.contains("hidden")) {
			element.lastElementChild.classList.add("hidden")
			element.firstElementChild.classList.remove("hidden")
		} else {
			element.firstElementChild.classList.remove("hidden")
		}
	}

	const changeSubsPageToAnnually = (e) => {
		e.target.style.backgroundColor = "rgb(99 102 241)"
		e.target.previousElementSibling.style.backgroundColor = "white"
		if (!element.firstElementChild.classList.contains("hidden")) {
			element.firstElementChild.classList.add("hidden")
			element.lastElementChild.classList.remove("hidden")
		} else {
			element.lastElementChild.classList.remove("hidden")
		}
	}

	useEffect(() => {
		if (theme === "light") {
			setStyle({backgroundColor: "white", color: "black"})
		} else {
			setStyle({backgroundColor: "#0f0d46f0", color: "#c6cb7a"})
		}
	}, [theme])

	return (
		<>
			<section className="subscriptionPage body-font overflow-hidden pt-20" style={style}>
				<div className="container px-16 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="sm:text-4xl text-3xl font-bold title-font mb-2">Chose Your Subscription From Below</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Enjoy all of your favourite movies on the big screen with the people that are the closest to your</p>
						<div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-8">
							<button className="py-1 px-4 bg-indigo-500 text-black focus:outline-none" onClick={changeSubsPageToMonthly}>
								Monthly
							</button>
							<button className="py-1 px-4 bg-white text-black focus:outline-none" onClick={changeSubsPageToAnnually}>
								Annually
							</button>
						</div>
						<div id="subsPagesChanges" className="mt-20">
							<MonthlySubs style={style} />
							<AnnuallySubs style={style} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

Subscription.propTypes = {
	theme: PropTypes.string.isRequired,
}

export default Subscription
