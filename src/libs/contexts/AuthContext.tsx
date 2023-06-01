"use client";

import { createContext } from "react";

interface userPayload {
  username: string | null;
}

export const usernameContext = createContext<userPayload>({ username: null });

export function UsernameProvider({
  username,
  children,
}: {
  username: string;
  children: any;
}) {
  return (
    <usernameContext.Provider value={{ username: username }}>
      {children}
    </usernameContext.Provider>
  );
}
