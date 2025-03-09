import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";

const font=DM_Sans({subsets:["latin"]});

export const metadata = {
  title: " Miza",
  description: "automate your work with Miza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
