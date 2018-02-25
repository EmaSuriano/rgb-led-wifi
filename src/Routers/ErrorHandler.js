const ErroHandler = (error, req, res, next) => {
  console.error('Something happened');
  res.status(400).json({ message: error.message });
};

export default ErroHandler;
