import { type AppType } from 'next/dist/shared/lib/utils'
import '~/styles/global.scss'
import { ThemeProvider } from 'next-themes'

import ButtonTheme from '~/components/ButtonTheme'

const MyApp: AppType = ({ Component, pageProps }) => {
    return <ThemeProvider attribute="class" enableSystem>
        <ButtonTheme></ButtonTheme>
        <div id="write">
            <Component {...pageProps} />
        </div>
    </ThemeProvider>
}

export default MyApp
