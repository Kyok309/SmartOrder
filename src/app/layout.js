import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata = {
  title: "Smart Order",
  description: "Онлайн захиалгын сайт",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
