import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhavishya | Registeration",
  description: "Inspiring Future",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
