import 'nextra-theme-docs/style.css'
import '../styles/nprogress.css'
import '../styles/globals.css'

import Router from "next/router";
import NProgress from "nprogress"
import { Analytics } from '@vercel/analytics/react';

import { Rubik } from 'next/font/google';

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const asap = Rubik({ subsets: ["latin"] });

export default function NekosAPI({ Component, pageProps }) {
    return (
        <div className={asap.className}>
            <Component {...pageProps} />
            <Analytics />
        </div>
    )
}