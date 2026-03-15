import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle DeCubellis — VP of Product | Hardware Leader | Builder",
  description:
    "15+ years building consumer electronics products from concept to mass production. 5 patents. Currently building iOS/Android apps with AI.",
  openGraph: {
    title: "Kyle DeCubellis — VP of Product | Hardware Leader | Builder",
    description:
      "15+ years building consumer electronics products from concept to mass production. 5 patents. Currently building iOS/Android apps with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
