import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import { formatDate } from "../../utils/date";
import Img from "../../../public/Demo.png"
import { UserRoundCheck } from 'lucide-react';

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleCoderQuest = () => {
		window.open("https://coder-quest.vercel.app/index.html");
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className="max-w-4xl w-full mx-auto mt-10 mb-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 flex flex-wrap lg:flex-nowrap items-start space-x-6"
		>
			{/* Left Side: Image Card */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
				className="flex-shrink-0 w-full lg:w-1/3 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
			>
				<img
					src={Img}
					alt="Abhishek Projects"
					className="rounded-lg w-full h-auto"
				/>
			</motion.div>

			{/* Right Side: Dashboard Card */}
			<div className="flex-grow space-y-6">
				<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-white to-white text-transparent bg-clip-text flex items-center justify-center">
					Dashboard  <UserRoundCheck className="w-10 h-10 ml-5 mt-1 text-yellow-400" />
				</h2>

				{/* Profile Information */}
				<motion.div
					className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<h3 className="text-xl font-semibold text-green-400 mb-3">Profile Information</h3>
					<p className="text-gray-300">Name : {user.name}</p>
					<p className="text-gray-300">Email : {user.email}</p>
				</motion.div>

				{/* Account Activity */}
				<motion.div
					className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
				>
					<h3 className="text-xl font-semibold text-green-400 mb-3">Account Activity</h3>
					<p className="text-gray-300">
						<span className="font-bold">Joined : </span>
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p className="text-gray-300">
						<span className="font-bold">Last Login : </span>
						{formatDate(user.lastLogin)}
					</p>
				</motion.div>

				{/* Logout Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					className="mt-4"
				>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleCoderQuest}
						className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
						focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
					>
						Explore Coder - Quest : An E-Learning Platform
					</motion.button>

					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleLogout}
						className="w-full py-3 px-4 mt-5 bg-gradient-to-r from-red-400 to-red-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-red-600 hover:to-red-600
						focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
					>
						Logout
					</motion.button>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default DashboardPage;
