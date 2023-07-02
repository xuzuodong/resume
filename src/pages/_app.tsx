import { type AppType } from 'next/dist/shared/lib/utils'
import '~/styles/global.scss'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import { Footer } from '~/components/Footer'
import ButtonTheme from '~/components/ButtonTheme'

const MyApp: AppType = ({ Component, pageProps }) => {
    return <>
        <Head>
            <title>许作栋的个人简历</title>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>" />
        </Head>
        <ThemeProvider attribute="class" enableSystem>
            <ButtonTheme></ButtonTheme>
            <div id="write">
                <Component {...pageProps} />
            </div>
            <Footer />
        </ThemeProvider>
    </>
}

export default MyApp
