import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/Nav";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
