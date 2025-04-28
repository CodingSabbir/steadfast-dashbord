import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "SteadFast Dashboard Clone",
  description: "A clone of the SteadFast dashboard interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body cz-shortcut-listen="true">
        {children}
        </body>
    </html>
  );
}
