import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-6xl h-[calc(100vh-8rem)] px-4">
        <div className="bg-gray-800 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden h-full flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Chat Section */}
          <div className="flex-1 flex flex-col">
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
