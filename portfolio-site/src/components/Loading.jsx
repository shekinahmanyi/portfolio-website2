

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
      <div className="w-16 h-16 border-8 border-t-indigo-400 border-gray-200 rounded-full animate-spin"></div>
      <p className="text-xl font-nunito font-bold text-white mt-4">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
