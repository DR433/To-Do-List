import PropTypes from "prop-types"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Signup(props) {
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
			<section className="bg-white dark:bg-gray-200 pt-8" style={style}>
				<div className="flex justify-center min-h-screen">
					<div className="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"}}></div>

					<div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
						<div className="w-full">
							<h1 className="text-2xl font-semibold tracking-wider capitalize">Get your free account now.</h1>

							<p className="mt-4">Let’s get you all set up so you can verify your personal account and begin setting up your profile.</p>

							<form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
								<div>
									<label className="block mb-2 text-sm">First Name</label>
									<input type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-gray-200 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div>
									<label className="block mb-2 text-sm">Last name</label>
									<input type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-gray-200 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div>
									<label className="block mb-2 text-sm">Phone number</label>
									<input type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-gray-200 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div>
									<label className="block mb-2 text-sm">Email address</label>
									<input type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-gray-200 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div>
									<label className="block mb-2 text-sm">Password</label>
									<input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-gray-200 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<div>
									<label className="block mb-2 text-sm">Confirm password</label>
									<input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-gray-200 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
								</div>

								<button className="flex items-center justify-between w-40 px-6 py-3 mt-8 text-sm tracking-wide text-white capitalize transition-all duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow-md hover:shadow-slate-400 translate-y-0 hover:-translate-y-2 ease-in-out">
									<span>Sign Up </span>

									<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
									</svg>
								</button>
							</form>
							<p className="mt-16 text-sm text-center">
								Already have an account?
								<Link to={"/login"}>
									<a className="text-blue-500 focus:outline-none focus:underline hover:underline ml-2">log-in</a>
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

Signup.propTypes = {
	theme: PropTypes.string.isRequired,
}

export default Signup
