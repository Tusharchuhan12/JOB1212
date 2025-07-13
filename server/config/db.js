import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('✅ MongoDB Connected'));

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1); // exit on failure
    }
};

export default connectDB;
