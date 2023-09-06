import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const problemDifficultyColors = {
  easy: "bg-teal-500 hover:bg-teal-600",
  normal: "bg-indigo-500 hover:bg-indigo-600",
  hard: "bg-rose-500 hover:bg-rose-600",
}


// TODO: Remove this and use intl8n
export const problemDifficultyLabels ={
  easy: "Kolay",
  normal: "Orta",
  hard: "Zor",
}