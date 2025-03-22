import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-gray-700 bg-gray-900 flex flex-col transition-all duration-200">
      {/* Header */}
      <div className="border-b border-gray-700 w-full p-5">
        <div className="flex items-center gap-2 text-gray-400">
          <Users className="w-6 h-6 text-primary" />
          <span className="font-medium hidden lg:block text-white">Contacts</span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3 animate-pulse">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="w-12 h-12 bg-gray-700 rounded-full" />
            </div>

            {/* User info skeleton - visible only on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="h-4 w-32 bg-gray-700 rounded-md mb-2" />
              <div className="h-3 w-16 bg-gray-700 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
