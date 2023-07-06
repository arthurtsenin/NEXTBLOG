"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <Toaster position="bottom-left" reverseOrder={false} />
      {children}
    </SessionProvider>
  );
};
