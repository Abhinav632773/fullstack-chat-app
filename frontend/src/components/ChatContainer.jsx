import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef, useCallback } from "react";
import { useAuthStore } from "../store/useAuthStore"; // ✅ Get socket from here

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();

  const { authUser, socket } = useAuthStore(); // ✅ Get socket from useAuthStore
  const messageEndRef = useRef(null);

  const fetchMessages = useCallback(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser?._id, getMessages]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  useEffect(() => {
    if (socket && selectedUser) {
      subscribeToMessages(socket); // ✅ Pass socket here
      return () => unsubscribeFromMessages(socket); // ✅ Unsubscribe when unmounting
    }
  }, [socket, selectedUser, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
        {messages.map((message, index) => {
          const isSentByUser = message.senderId === authUser._id;

          return (
            <div
              key={message._id}
              className={`chat ${isSentByUser ? "chat-end" : "chat-start"}`}
              ref={index === messages.length - 1 ? messageEndRef : null}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img
                    src={isSentByUser ? authUser.profilePic || "/avatar.png" : selectedUser?.profilePic || "/avatar.png"}
                    alt="profile pic"
                  />
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-white opacity-50 ml-1">{new Date(message.createdAt).toLocaleTimeString()}</time>
              </div>
              <div className={`chat-bubble flex flex-col bg-indigo-700 text-white p-3 rounded-lg ${isSentByUser ? "rounded-br-md" : "rounded-bl-md"}`}>
                {message.image && <img src={message.image} alt="Attachment" className="sm:max-w-[200px] rounded-md mb-2" />}
                {message.text && <p>{message.text}</p>}
              </div>
            </div>
          );
        })}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
