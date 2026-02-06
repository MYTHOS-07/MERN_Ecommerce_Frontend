import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config/config";
import AppProvider from "@/redux/provider";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: config.appName,
  description: "Electronics E-commerce, online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            <main className="min-h-screen dark:bg-gray-900 dark:text-white"> {children}</main>
            <Footer />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
