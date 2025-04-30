import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Courier Dashboard",
  description: "The dashboard interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} "scroll-smooth"`}>
      <body cz-shortcut-listen="true">
        {children}
        </body>
    </html>
  );
}
