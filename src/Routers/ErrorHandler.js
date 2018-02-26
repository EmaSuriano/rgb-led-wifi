const ErroHandler = (error, req, res, next) => {
  const message = error.context
    ? 'There was an error on ' + error.context + '. ' + error.message
    : error.message;

  console.error(message);
  res.status(400).json({ message });
};

export default ErroHandler;
