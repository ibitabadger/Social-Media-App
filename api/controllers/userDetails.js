import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUserDetails = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM user_details WHERE userId=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data[0]);
  });
};

export const updateUserDetails = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "UPDATE user_details SET `website`=?, `desc`=?, `city`=?, `job`=? WHERE userId=?";

    db.query(
      q,
      [
        req.body.website,
        req.body.desc,
        req.body.city,
        req.body.job,
        userInfo.userId,
      ],
      (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("User details updated!");
        return res.status(403).json("You can update only your own details!");
      }
    );
  });
};