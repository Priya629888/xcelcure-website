import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "../assets/css/custom.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Providers from "./Reducer/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose what you need
});

const helveticaNeue = localFont({
  src: [
    {
      path: "../assets/fonts/helveticaneuecyr-roman.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
});

export const metadata = {
  title: "Xcelcure",
  description: "Xcelcure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <Providers>
          <Header />
          {children}
          <Footer />
           </Providers>
        </main>
      </body>
    </html>
  );
}
