const ErroHandler = (error, req, res, next) => {
  console.error('Something happened');
  res.json({ message: error.message });
};

export default ErroHandler;
