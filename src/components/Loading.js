import React from "react";

const Loading = () => {
  return (
    <div className="relative h-screen w-full">
      {/* 프로그레스 바 */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
        <div className="h-full bg-red-500 transition-all duration-200 ease-out" style={{ width: `100%` }}></div>
      </div>

      {/* 로딩 텍스트 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl font-bold text-red-500">100%</div>
      </div>
    </div>
  );
};

export default Loading;
