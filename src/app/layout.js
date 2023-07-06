import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";
import { inter } from "./font";

export const metadata = {
  title: "NEXTBLOG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Header />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
