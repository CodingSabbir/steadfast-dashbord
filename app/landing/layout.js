import { Poppins } from "next/font/google";
import "../globals.css"
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});



export default function LandingLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body cz-shortcut-listen="true">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
