import React from "react";

export default function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
