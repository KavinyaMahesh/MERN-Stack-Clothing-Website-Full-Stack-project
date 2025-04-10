import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next(); // Proceed to the next middleware
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
});


const User = mongoose.model("User", userSchema);
export default User;
