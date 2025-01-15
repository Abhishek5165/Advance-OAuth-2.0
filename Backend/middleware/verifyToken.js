import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
	
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });

		// Log the decoded token to check if userId is present
		console.log("Decoded Token:", decoded);

		// Access the UserId correctly
		req.userId = decoded.UserId; 
		// Log the userId from req
		console.log("UserId from Request:", req.userId);

		next();
	} catch (error) {
		console.log("Error in verifyToken", error);
		return res.status(500).json({ success: false, message: "Server error" });
	}
};
