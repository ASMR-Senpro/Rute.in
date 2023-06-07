import { Link } from "react-router-dom";
import IconAuth from "./IconAuth.png";
import { useAuthContext } from "../hooks/auth/useAuthContext";
import { useEffect, useState } from "react";
import { useSignUp } from "../hooks/auth/useSignUp";
import { usePasswordValidation } from "../hooks/auth/usePasswordValidation";
import axios from 'axios';

const Signup = () => {
	const [provData, setProvData] = useState({})
	const fetchData = async () => {
		try {
			const response = await axios.get('https://adityar22.github.io/api-wilayah-indonesia/api/provinces.json');
			setProvData(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	console.log(provData)


	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastname] = useState("")
	const [province, setProvince] = useState("")
	const [city, setCity] = useState("")
	const [birth, setBirth] = useState(new Date())

	const { passwordError, confirmPasswordError, passwordInput, handlePasswordChange, handleValidation } = usePasswordValidation();
	const { signup, isPending, error } = useSignUp();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = firstName + " " + lastName
		await signup(email, name, username, passwordInput.password, province, city, birth);
	}

	return (
		<div className="bg-cyan-100 w-full h-screen flex">
			<div className="container m-auto h-[80vh] items-center rounded-md bg-neutral-50 shadow-md">
				<div className="lg:grid grid-cols-2 gap-5 items-center">
					<div className="h-[80vh] p-4">
						<div className="text-center text-cyan-700 text-[28px] font-bold Poppins">
							Create Account
						</div>

						<form>
							<div class="mt-8 relative z-0 w-full mb-6 group">
								<input
									type="text"
									name="floating_email"
									id="floating_email"
									class="border-1 border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
									value={email}
									onChange={(e) => { setEmail(e.target.value) }}
								/>
								<label
									for="floating_email"
									class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Email address
								</label>
							</div>
							<div class="mt-8 relative z-0 w-full mb-6 group">
								<input
									type="text"
									name="floating_username"
									id="floating_username"
									class="border-1 border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
									value={username}
									onChange={(e) => { setUsername(e.target.value) }}
								/>
								<label
									for="floating_username"
									class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Username
								</label>
							</div>
							<div class="relative z-0 w-full mb-6 group">
								<input
									type="password"
									name="floating_password"
									id="floating_password"
									class="border-1 border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
									onChange={handlePasswordChange}
									onKeyUp={handleValidation}
									value={passwordInput.password}
								/>
								<label
									for="floating_password"
									class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Password
								</label>
							</div>
							<div class="grid md:grid-cols-2 md:gap-6">
								<div class="relative z-0 w-full mb-6 group">
									<input
										type="text"
										name="floating_first_name"
										id="floating_first_name"
										class="border-1 border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										required
										value={firstName}
										onChange={(e) => { setFirstName(e.target.value) }}
									/>
									<label
										for="floating_first_name"
										class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										First name
									</label>
								</div>
								<div class="relative z-0 w-full mb-6 group">
									<input
										type="text"
										name="floating_last_name"
										id="floating_last_name"
										class="border-1 border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										required
										value={lastName}
										onChange={(e) => { setLastname(e.target.value) }}
									/>
									<label
										for="floating_last_name"
										class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Last name
									</label>
								</div>
							</div>
							<div class="flex flex-wrap w-full">
								<div class="relative z-0 mb-6 group w-full">
									<input
										type="tel"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										name="floating_prov"
										id="floating_prov"
										class="border-1 border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										required
										value={province}
										onChange={(e) => { setProvince(e.target.value) }}
									/>
									<label
										for="floating_prov"
										class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
										Province
									</label>
								</div>
								{province !== "" &&
									<div class="relative z-0 mb-6 group w-full">
										<input
											type="tel"
											pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
											name="floating_city"
											id="floating_city"
											class="border-1 border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
											placeholder=" "
											required
											value={city}
											onChange={(e) => { setCity(e.target.value) }}
										/>
										<label
											for="floating_city"
											class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
											City
										</label>
									</div>
								}
							</div>
							<div class="relative z-0 w-full mb-6 group">
								<input
									type="date"
									name="floating_birthdate"
									id="floating_birthdate"
									class="border-1 border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
									value={birth}
									onChange={(e) => { setBirth(e.target.value) }}
								/>
								<label
									for="floating_birthdate"
									class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Birth of Date
								</label>
							</div>
							<div className="mt-4 text-center">
								<button
									type="signup"
									class="text-white bg-cyan-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Sign Up
								</button>
							</div>
						</form>
					</div>
					<div className="bg-gradient-to-r from-cyan-500 to-cyan-700 p-4 h-[80vh] rounded-sm">
						<div className="text-white text-right text-[32px] pt-4 pr-6 font-bold cursor-pointer">
							<Link to="/">
								<h1>RUTE.IN</h1>
							</Link>
						</div>
						<div>
							<div className="rounded-xl w-9/12 h-9/12 m-auto">
								<img src={IconAuth} alt="image"></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Signup;
