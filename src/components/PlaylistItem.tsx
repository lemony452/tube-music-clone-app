"use client";

import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

function PlaylistItem({ playlistItem }: any) {
  const onClickPlay = () => {};

  return (
    <li className="p-2 flex flex-row justify-between items-center cursor-pointer group hover:bg-neutral-700 rounded-md">
      <div className="flex flex-col">
        <div className="text-sm">{playlistItem.playlistName}</div>
        <div className="text-xs text-neutral-500">{playlistItem.owner}</div>
      </div>
      <div
        onClick={onClickPlay}
        className="hidden group-hover:block cursor-pointer"
      >
        <IoMdPlayCircle size={24} />
      </div>
    </li>
  );
}

export default PlaylistItem;
