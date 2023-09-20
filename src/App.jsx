// All imports of other modules
import {useState} from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomepageBody from "./Components/HomepageBody"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Allnotes from "./Components/Allnotes"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Subscription from "./Components/Subscription"
import ErrorPage from "./Components/ErrorPage"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import CreateNewNote from "./Components/CreateNewNote"

// Main Application Code
function App() {
	const [theme, setTheme] = useState("light")
	const themeChange = () => {
		if (theme === "light") {
			setTheme("dark")
		} else if (theme === "dark") {
			setTheme("light")
		}
	}
	return (
		<>
			<Router>
				<Navbar theme={theme} themeChange={themeChange} />
				<div className="container pt-14">
					<Routes>
						<Route path="/" element={<HomepageBody theme={theme} />}></Route>
						<Route path="/about" element={<About theme={theme} />}></Route>
						<Route path="/contacts" element={<Contact theme={theme} />}></Route>
						<Route path="/allnotes" element={<Allnotes theme={theme} />}></Route>
						<Route path="/subscription" element={<Subscription theme={theme} />}></Route>
						<Route path="/login" element={<Login theme={theme} />}></Route>
						<Route path="/signup" element={<Signup theme={theme} />}></Route>
						<Route path="/create-note" element={<CreateNewNote theme={theme} />}></Route>
						<Route path="*" element={<ErrorPage theme={theme} />}></Route>
					</Routes>
				</div>
				<Footer theme={theme} />
			</Router>
		</>
	)
}

export default App
