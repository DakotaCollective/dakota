import "./globals.css";

export const metadata = {
  title: "Dakota",
  description: "Lead generation system",
};

export default function RootLayout({
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