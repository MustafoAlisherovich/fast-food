import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		email: String,
		password: String,
		username: String,
	},
	{ timestamps: true }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User
