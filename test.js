const { MongoClient } = require('mongodb');

// MongoDB connection string
const uri = 'mongodb://mongoadmin:secretPass@localhost:35000/projectDb?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Specify the database and collection you want to monitor
    const database = client.db('projectDb');
    const collection = database.collection('warehouses');

    // Create a change stream on the collection
    const changeStream = collection.watch();

    // Listen for changes
    changeStream.on('change', (change) => {
      console.log('New data inserted:', change.fullDocument);
      // You can add your notification logic here
    });

    // Keep the script running
    await new Promise(() => { });
  } finally {
    // Close the connection when done
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Start the script
connectToMongoDB().catch(console.error);
