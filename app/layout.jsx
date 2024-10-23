import Nav from "@components/Nav/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "يعقوب للتجارة | Yaacoub Lil Tijara",
  description:
    "Discover high-quality car parts and turbochargers for all your automotive needs. Shop the best in performance and reliability. اكتشف قطع غيار السيارات والشواحن التوربينية عالية الجودة لجميع احتياجات السيارات. تسوق الأفضل في الأداء والموثوقية.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Jockey One"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        { children}
      </body>
    </html>
  );
};

export default RootLayout;
