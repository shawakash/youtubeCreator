import jwt from "jsonwebtoken";
import { Socket } from "socket.io";

const auth = async (socket, next) => {
    try {
        const { CREATOR_SECRET } = process.env;
        console.log(socket.handshake);
        const token = socket.handshake.headers.authorization;
        if (!token) return next(new Error("No token provided"));
 
        const user = jwt.verify(token, CREATOR_SECRET, (err, decoded) => {
            if(err) {
                console.log(err)
                return next(new Error("Forbidden"));
            }
            if(decoded._id) {
                socket.$_id = decoded._id;
                next();
            }
        });
   } catch (error) {
        return next(error);
   }
};

export default auth;