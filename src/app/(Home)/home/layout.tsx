import React from "react";
import Navbar from "../_components/Navbar";

export default function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-black">
      <Navbar />
      <div>{children}</div>
    </main>
  );
}
