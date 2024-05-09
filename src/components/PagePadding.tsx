import React from "react";

function PagePadding({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto px-[10px] py-2 lg:px-[100px] bg-pink-100">
      {children}
    </div>
  );
}

export default PagePadding;
