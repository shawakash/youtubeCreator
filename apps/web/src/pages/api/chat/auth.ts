import jwt from "jsonwebtoken";
import { Socket } from "socket.io";

const auth = async (socket, next) => {
    try {
        const { CREATOR_SECRET } = process.env;
        const { token } = socket.handshake.auth;
        const { field } = socket.handshake.query;
        if (!token) return next(new Error("No token provided"));
        if (!field) return next(new Error("No field provided"));
 
        const user = jwt.verify(token, CREATOR_SECRET, (err, decoded) => {
            if(err) {
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