import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="w-full max-w-md space-y-6 bg-gray-800 p-8 rounded-2xl shadow-2xl mt-16">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300">
              <User className="size-7 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mt-2">My Profile</h1>
            <p className="text-gray-400">Manage your profile details</p>
          </div>
        </div>

        {/* Avatar Upload */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
              src={selectedImg || authUser.profilePics || "/avatar.png"}
              alt="Profile"
              className="size-32 rounded-full object-cover border-4 border-gray-600"
            />
            <label
              htmlFor="avatar-upload"
              className={`absolute bottom-0 right-0 bg-primary hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
              }`}
            >
              <Camera className="w-5 h-5 text-white" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
          <p className="text-sm text-zinc-400">
            {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
          </p>
        </div>

        {/* User Information */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium py-2">Full Name</label>
            <p className="px-4 py-2.5 bg-gray-700 rounded-lg border border-gray-600">
              {authUser?.fullName}
            </p>
          </div>

          <div>
            <label className="block text-gray-300 font-medium py-2">Email Address</label>
            <p className="px-4 py-2.5 bg-gray-700 rounded-lg border border-gray-600">
              {authUser?.email}
            </p>
          </div>
        </div>

        {/* Account Information */}
        <div className="mt-6 bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4">Account Information</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span>Member Since</span>
              <span>{authUser.createdAt?.split("T")[0]}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Account Status</span>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
