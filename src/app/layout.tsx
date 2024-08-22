import type { Metadata } from "next";
import Link from "next/link";
import "./style.css";

export const metadata: Metadata = {
  title: "My Jotai",
  description: `状態管理ライブラリ "Jotai" のサンプル`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="wrapper">
          <header>
            <div>
              <h1>
                <Link href="/">My Jotai</Link>
              </h1>
              <p>
                状態管理ライブラリ&nbsp;
                <a href="https://jotai.org/" target="_blank">
                  &quot;Jotai&quot;
                </a>
                &nbsp;のサンプルです。
              </p>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
