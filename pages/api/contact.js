import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  // if (req.method === 'GET') {
  //   res.status(200).json({ message: 'You are at contact route' });
  // }
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // validate data
    if (
      !email ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ error: 'Invalid Input' });
      return;
    }

    // store in db
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://coreymunn:Sherm@n5@cluster0.kdjja.mongodb.net/blog-site?retryWrites=true&w=majority'
      );
    } catch (error) {
      res
        .status(500)
        .json({ error: error.message || 'Could Not Connect to DB' });
    }

    const db = client.db();
    let result;
    try {
      result = await db.collection('messages').insertOne(newMessage);
    } catch (error) {
      res
        .status(500)
        .json({ error: error.message || 'Storing Message Failed' });
      client.close();
      return;
    }

    client.close();
    res.status(201).json({ status: 'Success', message: result.ops });
  }
};

export default handler;
