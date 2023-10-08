
// const uri = 'mongodb://localhost:27017';
// const dbName = 'your_database_name';

// export async function connectToMongoDB() {
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     return client;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// }

// export async function closeMongoDBConnection(client: MongoClient) {
//   try {
//     await client.close();
//     console.log('Disconnected from MongoDB');
//   } catch (error) {
//     console.error('Error closing MongoDB connection:', error);
//     throw error;
//   }
// }

// // You can export other MongoDB-related functions or constants as needed
