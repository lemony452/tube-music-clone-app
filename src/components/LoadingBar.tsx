"use client";

import React from "react";
import { BarLoader } from "react-spinners";

function LoadingBar() {
  return (
    <div className="w-full">
      <BarLoader color="red" cssOverride={{ width: "100%" }}></BarLoader>
    </div>
  );
}

export default LoadingBar;
