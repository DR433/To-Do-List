import PropTypes from "prop-types";

function NotesCard(props) {
	const {theme} = props;
	return (
		<>
			{/* the first Note */}
			<div className="md:w-1/3 px-3 py-4 rounded-lg">
				<div className={`flex rounded-lg h-full ${theme === "light" ? "bg-gray-300" : "bg-gray-900"} p-8 flex-col transition-all transform translate-y-0 hover:-translate-y-2 ease-in-out shadow-md hover:shadow-slate-500`}>
					<div className="flex flex-row justify-between items-center mb-3">
						<div className="notesHeading flex flex-row">
							<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
								<svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg" width="200" zoomAndPan="magnify" viewBox="0 0 375 374.9999" height="200" preserveAspectRatio="xMidYMid meet" version="1.0">
									<defs>
										<path id="pathAttribute" d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 " fill="blue" strokeWidth="1" stroke="#727272"></path>
									</defs>
									<g>
										<path id="pathAttribute" d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 " fillOpacity="1" fillRule="nonzero" fill="blue" strokeWidth="1" stroke="#727272"></path>
									</g>
									<g id="inner-icon" transform="translate(85, 75)">
										<svg xmlns="http://www.w3.org/2000/svg" width="213" height="213" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" id="IconChangeColor">
											<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" id="mainIconPathAttribute" fill="#ffffff"></path>
										</svg>
									</g>
								</svg>
							</div>
							<h2 className={`text-xl title-font font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Shooting Stars</h2>
						</div>
						<div className="notesModifier flex flex-row space-x-4">
							{/* open Notes symbol */}
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-medical-fill cursor-pointer" viewBox="0 0 16 16" id="IconChangeColor">
								<path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" id="mainIconPathAttribute" fill="blue"></path>
							</svg>

							{/* update Note symbol */}
							<svg style={{color: "blue"}} width="24" strokeWidth="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
								<path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="blue"></path> <path d="M8 10H16M8 6H12M8 14H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="blue"></path>
								<path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="blue" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
								<path d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="blue"></path>
							</svg>

							{/* delete Note symbol */}
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash cursor-pointer" viewBox="0 0 16 16" id="IconChangeColor">
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" id="mainIconPathAttribute" fill="blue"></path> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" id="mainIconPathAttribute" fill="blue"></path>
							</svg>
						</div>
					</div>
					<div className="flex-grow">
						<p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
					</div>
					<div className="badge flex flex-row mt-6 flex-wrap">
						<span className="bg-purple-100 text-purple-800 text-xs font-bold italic mr-2 px-5 py-2 rounded-full dark:bg-purple-900 dark:text-purple-300">Purple</span>
					</div>
				</div>
			</div>
		</>
	)
}
NotesCard.propTypes = {
	theme: PropTypes.string.isRequired,
}
export default NotesCard
