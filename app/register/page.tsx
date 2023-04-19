import RegisterForm from "./form"

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 antialiased flex flex-col justify-center items-center">
            <div className="relative py-3 sm:w-96 sm:mx-auto text-center">
                <span className="text-2xl font-light">Register your account</span>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-indigo-400 rounded-t-md"></div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
export default RegisterPage