import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-black">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
