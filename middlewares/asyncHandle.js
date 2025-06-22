require("dotenv").config();
const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      return res.status(500).json({
        message: "Lỗi ",
        errors: process.env.NODE_ENV === "development" ? err : "",
      });
    }
  };
};
export default asyncHandler;
