import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

interface ChatProps {
  editorId: string;
  creatorId: string;
  url: string;
  token: string;
}

export const ChatBox: React.FC<ChatProps> = ({ editorId, creatorId, url, token }) => {
  const roomId = `${editorId}-${creatorId}`;
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    const newSocket = io(url, {
      extraHeaders: {
        'Authorization': token
      }
    });
    setSocket(newSocket);

    newSocket.emit('join room', roomId);

    newSocket.on('chat message', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.emit('leave room', roomId);
      newSocket.disconnect();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (socket && input.trim() !== '') {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded shadow">
      <ul className="space-y-2">
        {messages.map((message, index) => (
          <li
            key={index}
            className="bg-gray-100 p-2 rounded"
          >
            {message}
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Type a message"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

