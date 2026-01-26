import "./globals.css"; // Import global styles
import Navbar from "@/components/navbar"; // Adjust the path if necessary
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";

// Configure the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Atom Robotics Lab",
  description: "Robotics Society of MAIT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        suppressHydrationWarning={true}
        className={`${poppins.className} font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
