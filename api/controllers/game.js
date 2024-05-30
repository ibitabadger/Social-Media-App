import { db } from "../connect.js";
import jwt from "jsonwebtoken";
// import moment from "moment";


export const getGames = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
  
      const q = `SELECT * FROM games`;
  
      db.query(q, [userInfo.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    });
  };
  

// export const deleteComment = (req, res) => {
//   const token = req.cookies.access_token;
//   if (!token) return res.status(401).json("Not authenticated!");

//   jwt.verify(token, "jwtkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const commentId = req.params.id;
//     const q = "DELETE FROM comments WHERE `id` = ? AND `userId` = ?";

//     db.query(q, [commentId, userInfo.id], (err, data) => {
//       if (err) return res.status(500).json(err);
//       if (data.affectedRows > 0) return res.json("Comment has been deleted!");
//       return res.status(403).json("You can delete only your comment!");
//     });
//   });
// };
