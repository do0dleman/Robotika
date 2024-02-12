import { getDictionary } from "dictionaries/dictionary"
import { Locale } from "i18n.config"

async function Footer({ params }: {
    params: { lang: Locale }
}) {
    const { footer } = await getDictionary(params.lang)

    return (
        <footer className="flex justify-center py-4 px-4 mt-12 md:mt-16 bg-bgSecondary">
            <h3 className="text-h3 text-lg text-center">{footer.title}</h3>
        </footer>
    )
}
export default Footer