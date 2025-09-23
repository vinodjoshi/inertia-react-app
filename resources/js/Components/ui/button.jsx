import * as React from "react"

export function Button({ variant = "default", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all shadow-sm"
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  }

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
