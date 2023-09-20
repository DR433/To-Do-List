import PropTypes from "prop-types"
import {useState, useEffect} from "react"

function About(props) {
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
			<section className="body-font pt-16" style={style}>
				<div className="container px-16 pt-24 pb-14 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font mb-1">Great Notes, Great Learning</h2>
						<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">Advantages of KeepNote Website</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">Using a website like Google Keep for creating, storing, updating, and deleting notes has many advantages. One of the greatest benefits is its seamless integration with the entire Google ecosystem. That means if you rely heavily on Gmail, Google Drive, or Google Docs, you can easily share items in Keep between platforms, from inside the Keep app or through a Google program that supports Keep</p>
					</div>
					<div className="flex flex-wrap">
						<div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
							<h2 className={`${theme === "light" ? "text-black" : "text-white"} text-lg sm:text-xl font-bold title-font mb-2`}>Creating New Notes</h2>
							<p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
						</div>
						<div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
							<h2 className={`${theme === "light" ? "text-black" : "text-white"} text-lg sm:text-xl font-bold title-font mb-2`}>Readability And More Storage</h2>
							<p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
						</div>
						<div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
							<h2 className={`${theme === "light" ? "text-black" : "text-white"} text-lg sm:text-xl font-bold title-font mb-2`}>Easy Updation of Notes</h2>
							<p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
						</div>
						<div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
							<h2 className={`${theme === "light" ? "text-black" : "text-white"} text-lg sm:text-xl font-bold title-font mb-2`}>Delete Whenever</h2>
							<p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
						</div>
					</div>
				</div>
			</section>

			{/* the second section */}
			<section className="body-font" style={style}>
				<div className="container px-16 pt-16 pb-28 mx-auto">
					<div className="text-center mb-20">
						<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">Benifits Of Keeping Notes</h1>
						<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">KeepNotes is also available on multiple devices, so you can jot down notes on your Android or iOS device while in transit, and pick it up later on your computer1. You can also collaborate with others by sharing notes and adding collaborators to your notes to quickly and easily get them in the loop about whatever you’re working on</p>
						<div className="flex mt-6 justify-center">
							<div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
						</div>
					</div>
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
						<div className="p-5 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className={`${theme === "light" ? "text-black" : "text-white"} text-lg title-font font-bold mb-3`}>Easy Sharing Notes</h2>
								<p className="leading-relaxed text-base">Taking notes can help you relieve stress by allowing you to get your thoughts and ideas out of your head and onto paper. This can help clear your mind and reduce the mental clutter that can contribute to stress.</p>
							</div>
						</div>
						<div className="p-5 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className={`${theme === "light" ? "text-black" : "text-white"} text-lg title-font font-bold mb-3`}>Powerful Handwritten Notes</h2>
								<p className="leading-relaxed text-base">Handwritten notes are a powerful tool for encrypting embodied cognition and in turn supporting the brain’s capacity for retrieval of information. When you take notes by hand, your hands create a robust external memory storage: your notebook.</p>
							</div>
						</div>
						<div className="p-5 md:w-1/3 flex flex-col text-center items-center">
							<div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
								<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className={`${theme === "light" ? "text-black" : "text-white"} text-lg title-font font-bold mb-3`}>Meaningful And Reflective Study</h2>
								<p className="leading-relaxed text-base">Note-taking becomes note-making: an active involvement in making sense and meaning for later reflection, study or sharing of notes to compare understanding with lab partners or classmates.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

About.propTypes = {
	theme: PropTypes.string.isRequired,
}
export default About
