import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 정해진 시간 ms 동안 실행을 지연하는 함수
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
