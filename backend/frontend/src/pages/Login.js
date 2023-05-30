import IconAuth from "./IconAuth.png";

const Login = () => {
	return (
		<div className="bg-cyan-100 w-full h-screen flex">
			<div className="container m-auto h-[80vh] items-center rounded-md bg-neutral-50 shadow-md">
				<div className="lg:grid grid-cols-2 gap-5 items-center">
					<div className="h-[80vh] p-4">
						<div className="text-center text-cyan-700 text-[28px] font-bold Poppins">
							Sign in to Rute.in
						</div>
						<form>
							<div class="mt-24 relative z-0 w-full mb-14 group">
								<input
									type="email"
									name="floating_email"
									id="floating_email"
									class="border border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_email"
									class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Email address
								</label>
							</div>
							<div class="relative z-0 w-full mb-6 group">
								<input
									type="password"
									name="floating_password"
									id="floating_password"
									class="border border-neutral-500 block py-2.5 px-0 w-full text-sm text-neutral-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									for="floating_password"
									class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Password
								</label>
							</div>
                            <div className="text-right">
                                <p
                                    id="helper-text-explanation"
                                    class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    <a
                                        href="#"
                                        class="ml-auto justify-end font-medium text-[12px] text-cyan-900 hover:underline dark:text-blue-500 pb-4">
                                        Forgot password?
                                    </a>
                                </p>
                            </div>

							<div className="text-center mt-16">
								<button
									type="submit"
									class="text-white bg-cyan-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Sign in
								</button>
                                <p class="mt-4 text-sm font-lightmedium text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-cyan-900 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
							</div>
						</form>
					</div>
					<div className="bg-gradient-to-r from-cyan-500 to-cyan-700 p-4 h-[80vh] rounded-sm">
						<div className="text-white text-right text-[32px] pt-4 pr-6 font-bold">
							<h1>RUTE.IN</h1>
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
export default Login;
