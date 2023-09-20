import PropTypes from "prop-types"
import {useState, useEffect} from "react"

const CreateNewNote = (props) => {
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
			<div className="createNoteContainer" style={style}>
                {/* The create new form */}
				<form className="createNoteContainer pt-20 px-24">
					<div className="space-y-12">
						<div className="border-b border-gray-900/10 pb-12">
							<h2 className="text-xl font-bold leading-7">Create a New Note</h2>
							<p className={`mt-1 text-sm leading-6 ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>Create the your own note to remind yourself about your daily routine or some of the important moments of your life.</p>

                            {/* Notes Title */}
							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-4">
									<label htmlFor="username" className="block text-md font-bold leading-6">
										Note Title
									</label>
									<div className="mt-2">
										<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
											<span className="flex select-none items-center px-5 sm:text-sm">Title</span>
											<input type="text" name="username" id="username" autoComplete="username" className="block flex-1 border-0 bg-white py-1.5 px-3 placeholder:text-gray-400 text-black ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md rounded-md sm:text-sm sm:leading-6" placeholder="Write Your Notes Title Here..." />
										</div>
									</div>
								</div>

                                {/* Notes Content */}
								<div className="col-span-full">
									<label htmlFor="about" className="block text-md font-bold leading-6">
										Note Content
									</label>
									<div className="mt-2">
										<textarea id="about" name="about" rows="6" className="block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
									</div>
									<p className="mt-3 text-sm leading-6">Write a few sentences in your Note.</p>
								</div>

                                {/* Notes Tags */}
								<div className="sm:col-span-4">
									<label htmlFor="noteTags" className="block text-md font-bold leading-6">
										Note Tags
									</label>
									<div className="mt-2">
										<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
											<span className="flex select-none items-center px-5 sm:text-sm">Tags</span>
											<input type="text" name="noteTags" id="noteTags" autoComplete="noteTags" className="block flex-1 border-0 bg-white py-1.5 px-3 placeholder:text-gray-400 text-black ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md rounded-md sm:text-sm sm:leading-6" placeholder="Write some Tags related To Your Title Here..." />
										</div>
									</div>

                                    {/* Add Notes Button */}
									<div className="addNoteButton mt-12">
										<button className="rounded-lg bg-blue-500 hover:bg-blue-600 transition-all transform translate-y-0 hover:-translate-y-2 ease-in-out shadow-md hover:shadow-slate-500 px-5 py-3 text-white font-bold">Create Note</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>

                {/* preview section */}

			</div>
		</>
	)
}

CreateNewNote.propTypes = {
	theme: PropTypes.string.isRequired,
}
export default CreateNewNote
