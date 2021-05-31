const handler = (req, res) => {
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

    res.status(201).json({ status: 'Success', message: newMessage });
  }
};

export default handler;
