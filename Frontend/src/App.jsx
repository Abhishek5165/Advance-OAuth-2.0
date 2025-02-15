import { Routes, Route } from "react-router-dom";
import FloatingShape from "./components/FloatingShape"
import SignUpPage from "./components/pages/SignUpPage";
import LoginPage from "./components/pages/LoginPage";
import EmailVerificationPage from "./components/pages/EmailVerificationPage";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { Navigate } from "react-router-dom";
import DashBoardPage from "./components/pages/DashBoardPage";
import LoadingSpinner from "./components/LoadingSpinner";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page ... 

const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};


function App() {
	const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, []);

	if (isCheckingAuth) return <LoadingSpinner />;

	return (
		<div className="min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 flex items center justify-center
    relative overflow-hidden">
			<FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%"
				delay={0} />
			<FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%"
				delay={5} />
			<FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%"
				delay={2} />

			<Routes>
				<Route path="/" element={
					<ProtectedRoute>
						<DashBoardPage />
					</ProtectedRoute>} />

				<Route path="/signup" element={
					<RedirectAuthenticatedUser>
						<SignUpPage />
					</RedirectAuthenticatedUser>} />
				<Route path="/login" element={
					<RedirectAuthenticatedUser>
						<LoginPage />
					</RedirectAuthenticatedUser>} />

				<Route path="/verify-email" element={<EmailVerificationPage />} />
				<Route path="/forgot-password" element={
					<RedirectAuthenticatedUser>
						<ForgotPassword />
					</RedirectAuthenticatedUser>} />
				<Route path="/reset-password/:token" element={
					<RedirectAuthenticatedUser>
						<ResetPassword />
					</RedirectAuthenticatedUser>} />
				{/* catch all routes */}
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Toaster />
		</div>
	)
}

export default App;


