import { type AppType } from 'next/dist/shared/lib/utils'
import '~/styles/global.scss'

const MyApp: AppType = ({ Component, pageProps }) => {
    return <div id="write">
        <Component {...pageProps} />
    </div>
}

export default MyApp
