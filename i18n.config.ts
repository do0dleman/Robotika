export const i18n = {
    defaultLocale: 'lv',
    locales: ['en', 'lv']
} as const

export type Locale = (typeof i18n)['locales'][number]