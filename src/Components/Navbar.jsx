import PropTypes from "prop-types"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons"

function Navbar(props) {
	const {theme, themeChange} = props
	const [style, setStyle] = useState({
		backgroundColor: "#f1f1f1f0",
		color: "black",
	})

	useEffect(() => {
		if (theme === "light") {
			setStyle({backgroundColor: "#f1f1f1f0", color: "black"})
		} else {
			setStyle({backgroundColor: "#181c24", color: "white"})
		}
	}, [theme])

	return (
		<>
			<header className="navbarcontainer bg-gray-200 body-font shadow-lg shadow-slate-300 fixed w-full z-20" style={style}>
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-bold">
					<Link to={"/"}>
						<a className="flex title-font font-medium items-center mb-4 md:mb-0">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
							</svg>
							<span className="ml-3 text-xl font-bold">KeepNotes</span>
						</a>
					</Link>
					<nav className="navPageOptions md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
						<FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="mr-7 font-bold cursor-pointer" onClick={themeChange} title="click to change theme" />
						<Link to={"about"}>
							<a className="mr-5 hover:text-orange-300 italic">About</a>
						</Link>
						<Link to={"contacts"}>
							<a className="mr-5 hover:text-orange-300 italic">Contacts</a>
						</Link>
						<Link to={"allnotes"}>
							<a className="mr-5 hover:text-orange-300 italic">All Notes</a>
						</Link>
						<Link to={"subscription"}>
							<a className="mr-5 hover:text-orange-300 italic">Subscription</a>
						</Link>
					</nav>
					<Link to={"login"}>
						<button className={`inline-flex items-center ${theme === "light" ? "bg-black" : "bg-white"} font-bold italic ${theme === "light" ? "text-white" : "text-black"} shadow-sm shadow-gray-300 border-0 py-2.5 px-5 focus:outline-none rounded text-base mt-4 md:mt-0`}>Login</button>
					</Link>
				</div>
			</header>
		</>
	)
}

Navbar.propTypes = {
	theme: PropTypes.string.isRequired,
	themeChange: PropTypes.func.isRequired,
}

export default Navbar
