import { useState } from "react";
import cn from "./lib/cn";

/* eslint-disable react/prop-types */
export default function Button({ className, ...rest }) {
  const [loading, setLoading] = useState(false);
  return (
    <button
      className={cn("bg-blue-500 text-white py-2 px-4 rounded", className, {
        "bg-amber-300": loading,
      })}
      onClick={() => setLoading(!loading)}
      {...rest}
    >
      Be a Good Man
    </button>
  );
}
