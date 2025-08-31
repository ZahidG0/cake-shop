import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sweet Delights - Premium Handcrafted Cakes",
  description: "Discover our exquisite collection of handcrafted cakes made with the finest ingredients. From chocolate delights to fruity sensations, we create memorable moments.",
  keywords: "cakes, bakery, handcrafted, chocolate cake, strawberry cake, red velvet, cheesecake, premium desserts",
  authors: [{ name: "Sweet Delights Bakery" }],
  openGraph: {
    title: "Sweet Delights - Premium Handcrafted Cakes",
    description: "Discover our exquisite collection of handcrafted cakes made with the finest ingredients.",
    url: "https://sweetdelights.com",
    siteName: "Sweet Delights",
    images: [
      {
        url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sweet Delights Premium Cakes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Delights - Premium Handcrafted Cakes",
    description: "Discover our exquisite collection of handcrafted cakes made with the finest ingredients.",
    images: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <CartProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
