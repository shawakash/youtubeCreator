import { Creator, dbConnect } from "db";
import { NextApiRequest, NextApiResponse } from "next";
import WebSocket from "websocket";
import middle from "../auth/middle";
import http from "http";
import { Server } from 'socket.io';
import auth from "./auth";

const connections = {};

export default async function handler(req, res) {
    if (req.method != 'GET') {
        return res.status(400).json({ message: 'Its a get Request' });
    }
    try {
        await dbConnect();


        if (res.socket.server.io) {
            console.log('Socket is already running')
        } else {
            console.log('Socket is initializing')
            const io = new Server(res.socket.server)
            res.socket.server.io = io

            io.use(async (socket, next) => {

                return await auth(socket, next);

            }).on('connection', async (socket) => {

                // connections[socket.$_id] = socket;
                const { creatorid } = socket.handshake.headers;

                try {

                    const creator = await Creator.findById(creatorid);
                    if (!creator) {
                        return socket.emit("error", "Creator Not Found");
                    }

                    // socket.on(creatorid as string, (data) => {
                    //     socket.join(creatorid);
                    // });

                    socket.on('message', (message) => {
                        io.to(creatorid).emit('message', message);
                    });

                    socket.on('disconnect', () => {
                        console.log('user disconnected');
                    });

                } catch (error) {
                    return socket.emit("error", error);
                }

            })
        }




    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Error', err: error });
    }
}