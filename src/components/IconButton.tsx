import React from "react";

// 아이콘 형태의 버튼을 동작하는 공통 컴포넌트
function IconButton({ icon, onClickIcon = () => {} }: any) {
  return (
    <div
      onClick={onClickIcon}
      className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
    >
      <span>{icon}</span>
    </div>
  );
}

export default IconButton;
