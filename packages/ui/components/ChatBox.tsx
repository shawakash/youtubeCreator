import React, { useEffect } from 'react'

export const ChatBox: React.FC<{ _id: string, creatorId: string }> = ({ _id, creatorId }) => {

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:3000/api/chat/ws`, ['']);
    
        ws.onopen = () => {
          console.log('WebSocket connected');
        };
    
        ws.onmessage = event => {
          console.log('Received message:', event.data);
          // Process the received message and update the UI as needed
        };
    
        ws.onclose = () => {
          console.log('WebSocket closed');
        };
    
        return () => {
          ws.close();
        };
      }, [_id]);

  return (
    null
  );
}
