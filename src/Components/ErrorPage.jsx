import PropTypes from "prop-types"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function ErrorPage(props) {
	const {theme} = props
	const [style, setStyle] = useState({
		backgroundColor: "white",
		color: "black",
	})

	useEffect(() => {
		if (theme === "light") {
			setStyle({backgroundColor: "white", color: "black"})
		} else {
			setStyle({backgroundColor: "#0f0d46f0", color: "#c6cb7a"})
		}
	}, [theme])
	return (
		<>
			<div className="errorPageContainer lg:px-24 lg:py-28 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16" style={style}>
				<div className="xl:pt-28 w-full xl:w-1/2 relative pb-12 lg:pb-0">
					<div className="relative">
						<div className="absolute">
							<div className="">
								<h1 className="my-2 font-bold text-2xl">Looks like you&apos;ve found the doorway to the great nothing</h1>
								<p className="my-2">Sorry about that! Please visit our hompage to get where you need to go.</p>
								<Link to={"/"}>
									<button className="sm:w-full lg:w-auto my-8 border rounded-lg font-bold md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 transform translate-y-0 transition-all hover:-translate-y-1 shadow-md hover:shadow-slate-400">Take me Home!</button>
								</Link>
							</div>
						</div>
						<div>
							<img src="https://i.ibb.co/G9DC8S0/404-2.png" />
						</div>
					</div>
				</div>
				<div>
					<img src="https://i.ibb.co/ck1SGFJ/Group.png" />
				</div>
			</div>
		</>
	)
}

ErrorPage.propTypes = {
	theme: PropTypes.string.isRequired,
}

export default ErrorPage
