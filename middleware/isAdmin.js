export const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(401).json({ message: "Not Authorized" });
  }

  next();
};
