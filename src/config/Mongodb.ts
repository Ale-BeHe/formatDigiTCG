import mongoose from 'mongoose'

const connectMongoDB = async (): Promise<void> => {
  try {
    console.log(process.env.MONGODB_URI)
    const conn = await mongoose.connect(process.env.MONGODB_URI as string)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(`Error: ${(err as Error).message}`)
    process.exit(1)
  }
}

export default connectMongoDB
