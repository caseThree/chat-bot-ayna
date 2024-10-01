import React, { createContext, useContext, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
};

export const SocketProvider = ({ user, children }) => {
    const socket = useRef();

    useEffect(() => {
        const token = user.access_token;
        console.log(`token: ${user.access_token}`)
        socket.current = io('http://localhost:3000/socket', {
            extraHeaders: {
                Authorization: `${token}`,
            },
        });

        socket.current.on('connect', () => {
            console.log('Socket connected:', socket.current.id);
        });

        return () => {
            socket.current.disconnect();
        };
    }, []);

    const sendMessage = (message, session) => {
        if (socket.current) {
            socket.current.emit('message', { message, session });
        }
    };

    const listenForMessages = (callback) => {
        if (socket.current) {
            socket.current.on('message', (event, data) => {
                console.log(`message received from socket in context`)
                console.log(data)
                callback(data);
            });
        }
    };

    return (
        <SocketContext.Provider value={{ socket: socket.current, sendMessage, listenForMessages }}>
            {children}
        </SocketContext.Provider>
    );
};