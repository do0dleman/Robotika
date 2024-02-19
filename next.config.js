/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import rehypeHighlight from 'rehype-highlight';
import next_mdx from '@next/mdx'

await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // i18n: {
    //     locales: ['default', 'en', 'lv', 'ru'],
    //     defaultLocale: 'default',
    //     localeDetection: false,
    // },
    // trailingSlash: true,
    experimental: {
        mdxRs: false
    },
    publicRuntimeConfig: {
        taskDir: 'tasks'
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        config.cache = false
        return config
    },
};

// const withMDX = next_mdx({
//     options: {
//         remarkPlugins: [],
//         rehypePlugins: [rehypeHighlight],
//     }
// })

// export default withMDX(config);
export default config;
