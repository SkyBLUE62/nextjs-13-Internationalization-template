import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }) {
  console.log(params);
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}