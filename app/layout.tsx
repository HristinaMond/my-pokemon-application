import type {Metadata} from "next";
import localFont from "next/font/local";
import "@/style/global.css";
import React from "react";
import {GlobalProvider} from "@/app/GlobalProvider";
import {Header, SideMenu} from "@/components";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Pokemon app",
    description: "Generated by create next app",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ErrorBoundary>
            <GlobalProvider>
                <html lang="en">
                <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: '100vh'
                    }}
                >
                    <Header/>
                    <div
                        style={{
                            display: 'flex',
                            height: '100%',
                            gap: '20px'
                        }}
                    >
                        <SideMenu/>
                        {children}
                    </div>
                </div>
                </body>
                </html>
            </GlobalProvider>
        </ErrorBoundary>
    );
}
