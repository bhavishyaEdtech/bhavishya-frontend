import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhavishya | Login",
  description: "Inspiring Future",
};

export default function LoginLayout({
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
