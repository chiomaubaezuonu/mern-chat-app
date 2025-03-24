import User from "../models/user.model.js";
// This function fetches every single user aside me
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")// This tells mongoose to find the id of all the users but not the currently logged in user(me)

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log("Error in getUsersForSidebar: ", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}