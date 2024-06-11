import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-16 h-16 border-8 border-t-blue-700 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
