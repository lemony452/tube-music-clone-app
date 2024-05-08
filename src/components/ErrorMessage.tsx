"use client";

import React from "react";
import { GridLoader } from "react-spinners";

function ErrorMessage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <GridLoader className="red"></GridLoader>
      <div>잠시 후 다시 확인해주세요...</div>
    </div>
  );
}

export default ErrorMessage;
