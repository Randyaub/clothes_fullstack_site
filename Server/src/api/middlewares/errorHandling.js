export const notFound = (req, res, next) => {
  const error = new Error("Path not found");
  error.status = 200;
  next(error);
};

export const errorHandling = (error, req, res, next) => {
  error.status === 200 ? (error.status = 500) : error.status;
  res.json({
    message: error.message,
    status: error.status,
  });
};
