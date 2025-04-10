const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')

const connectToDatabase = async () => {
    try {
        logger.info('connecting to', config.MONGO_URI)
        await mongoose.connect(config.MONGO_URI)
        logger.info('connected to MongoDB')
    } catch (error) {
        logger.error('error connecting to MongoDB:', error.message)
        process.exit(1) // Optional: Exit the process if connection fails
    }
}

module.exports = connectToDatabase
