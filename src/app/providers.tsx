"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import UIProvider from "@/src/shared/Providers/UIProvider";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const handleOffline = () => router.push("/no-internet");
    const handleOnline = () => router.back();

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [router]);

  return (
    <UIProvider>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </UIProvider>
  );
}
