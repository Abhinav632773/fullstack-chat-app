import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { useEffect, useState } from "react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [isOnline, setIsOnline] = useState(false);

  // ✅ Fix: Ensure onlineUsers contains only IDs, not objects
  useEffect(() => {
    if (!selectedUser) return;

    setIsOnline(
      Array.isArray(onlineUsers) &&
      onlineUsers.includes(selectedUser._id) // ✅ Directly check if ID exists
    );
  }, [selectedUser, onlineUsers]);

  return (
    <div className="p-2.5 border-b text-white border-base-300">
      <div className="flex items-center justify-between">
        
        {/* Left Section - User Info */}
        <div className="flex items-center gap-3">
          
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img
                src={selectedUser?.profilePics || "/avatar.png"}
                alt={selectedUser?.fullName || "User Avatar"}
              />
              
              {/* ✅ Online Indicator (Only if user is online) */}
              {isOnline && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 
                                rounded-full ring-2 ring-zinc-900" />
              )}
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser?.fullName || "Unknown User"}</h3>
            <p className="text-sm text-base-content/70">
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
