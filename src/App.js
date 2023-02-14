import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import ChatInput from "./components/chatInput";
import LockView from "./components/initialLock";
import { useUserStore } from "./store";

function App() {
  const socketRef = useRef(null);

  const { userName } = useUserStore((state) => state);

  useEffect(() => {
    if (userName && socketRef?.current) {
      socketRef.current.emit("userSelected", {
        userType: userName,
      });
    }
  }, [userName, socketRef]);

  const initMessage = (message) => {
    socketRef.current.emit("message", {
      newMessage: message,
      userType: userName,
    });
  };

  useEffect(() => {
    const socket = io.connect("http://localhost:3006");
    socket.on("connect", () => {
      console.log("connected in front-end", socket.connected);
    });
    socketRef.current = socket;
  }, []);

  const handleSend = (message) => {
    initMessage(message);
  };

  return (
    <div className="container mx-auto h-screen">
      <>
        {!!userName ? (
          <>
            <header className="h-14 flex px-4 justify-center items-center">
              <p className="text-2xl">Chat Bot</p>
            </header>
            <div className="relative h-[calc(100vh-3.5rem)]">
              <div className="h-[calc(100vh-7rem)] py-2"></div>
              <div className="w-full h-14">
                <ChatInput handleSend={handleSend} />
              </div>
            </div>
          </>
        ) : (
          <LockView />
        )}
      </>
    </div>
  );
}

export default App;
