import { type AppType } from 'next/dist/shared/lib/utils'
import '~/styles/global.scss'
import { ThemeProvider } from 'next-themes'

import { Footer } from '~/components/Footer'
import ButtonTheme from '~/components/ButtonTheme'

const MyApp: AppType = ({ Component, pageProps }) => {
    return <ThemeProvider attribute="class" enableSystem>
        <ButtonTheme></ButtonTheme>
        <div id="write">
            <Component {...pageProps} />
        </div>
        <Footer />
    </ThemeProvider>
}

export default MyApp
