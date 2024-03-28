import "../styles/globals.css";
import "../styles/custom.css";

export const metadata = {
  title: "Trip to Honeymoon",
  description: "Honenymoon Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
