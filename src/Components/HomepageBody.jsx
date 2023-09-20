import PropTypes from "prop-types"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function HomepageBody(props) {
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
			<section className="body-font" style={style}>
				<div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center" style={style}>
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font mb-10">
							<span className="racking-widest text-indigo-600 text-md font-medium title-font italic">Keep Your Notes updated</span>
							<br className="hidden lg:inline-block" />
							<span className="title-font text-6xl font-bold italic">KeepNotes</span>
						</h1>
						<p className="mb-12 leading-relaxed">Our website is a user-friendly platform for keeping notes. Easily create, organize, and access your notes from anywhere. With our cloud-based storage, you never have to worry about losing your notes. Try it out today and stay organized.</p>
						<div className="flex justify-center">
							<Link to={"/create-note"}>
								<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg font-bold transform translate-y-0 transition-transform hover:-translate-y-1 ease-in-out hover:shadow-md hover:shadow-slate-400">Add Note</button>
							</Link>
							<Link to={"/subscription"}>
								<button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg font-bold transform translate-y-0 transition-transform hover:-translate-y-1 ease-in-out hover:shadow-md hover:shadow-slate-400">Subscribe</button>
							</Link>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img className="object-cover object-center rounded h-full w-full" alt="hero" src="Notebook-PNG-HD-Image.png" />
					</div>
				</div>
			</section>
		</>
	)
}

HomepageBody.propTypes = {
	theme: PropTypes.string.isRequired,
}
export default HomepageBody
