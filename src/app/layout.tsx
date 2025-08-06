import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloudilic - Freelancer Marketplace",
  description: "Find and hire top freelancers for your projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-gray-50'>{children}</body>
    </html>
  );
}
