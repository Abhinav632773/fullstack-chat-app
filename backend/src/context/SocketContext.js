import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthStore } from "../store/useAuthStore";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const { authUser } = useAuthStore();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!authUser?._id) return;

    const newSocket = io("http://localhost:5001", {
      query: { userId: authUser._id },
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [authUser?._id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
