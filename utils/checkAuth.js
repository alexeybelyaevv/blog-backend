import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.headers.token || "";
  if (token) {
    try {
      const decoded = jwt.verify(token, "token123");
      req.userId = decoded._id;
      next();
    } catch (err) {
      return res.status(403).json({
        message: "No permission",
      });
    }
  } else {
    return res.status(403).json({
      message: "No permission",
    });
  }
};
