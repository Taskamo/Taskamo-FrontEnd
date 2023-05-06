"use client";

import "./globals.scss";
import { ConfigProvider } from "antd";
import ReactQueryProvider from "@/providers/ReactQueryprovider";
import { StyleProvider } from "@ant-design/cssinjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#4F9DFF",
            },
            components: {
              Button: {
                colorText: "#4F9DFF",
                colorBorder: "#4F9DFF",
                colorErrorText: "red",
              },
            },
          }}
        >
          <StyleProvider hashPriority="high">
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </StyleProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}

// dorood bar zakaryaye razi
// kose khare akhund
// eshgham mamanesh
// eshgham mamanetttt
// ye emshab shabe eshghe
// hamin emshaboo darimmm
// dorood bar kose nane akhuuund
// ajab saghi khubi budeeeee
// kir tu in davariii
// mamado nagerfte vali nemidunam chra shalvaresh payeeneeeee
// kose nane harki nakhuree
// dost daram in zendegirooo
// age ye roooz beri safarrrr
// beri ze pisham bi khabaaare
// parandeye darya mishammm
// tu daste moooj rahaa misham
// bebin man ke mastam daram kod mizanam
// vali tu kheili koskhuli ke dari kossheraye mano mikhuniiii
// vali doset darammmm
