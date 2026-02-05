import { Roboto_Condensed } from "next/font/google";
import Script from "next/script";
import Cursor from "../components/Cursor";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Mohammad sayem",
  description: "Web site created using create-react-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          integrity='sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </head>
      <body className={roboto.className}>
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
        {/* AOS script removed */}
        <Script
          src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
          strategy='afterInteractive'
        />
        <Script id='emailjs-init' strategy='afterInteractive'>
          {`(function () {
              if (window.emailjs) emailjs.init("FmuWHH0cUUyzPLKSf");
            })();`}
        </Script>
        {/* Added check for window.emailjs just in case */}
      </body>
    </html>
  );
}
