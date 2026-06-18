import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BookMyVenue | Discover & Book Premium Event Spaces",
  description: "Discover and book premium venues for weddings, parties, corporate events, and intimate gatherings. Browse verified venues, check real-time availability, and host memorable events.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50/50 font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
