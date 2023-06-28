// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import mdx from '@next/mdx'
await import('./src/env.mjs')

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

/** @type {import("next").NextConfig} */
const config = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

    reactStrictMode: true,

    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },

    webpack(_config) {
        const fileLoaderRule = _config.module.rules.find(rule =>
            rule.test?.test?.('.svg'),
        )

        _config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: /url/ },
                use: ['@svgr/webpack'],
            },
        )

        fileLoaderRule.exclude = /\.svg$/i

        return _config
    },
}

export default withMDX(config)
