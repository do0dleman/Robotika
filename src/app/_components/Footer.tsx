import { getDictionary } from "dictionaries/dictionary"
import { Locale } from "i18n.config"

async function Footer({ params }: {
    params: { lang: Locale }
}) {
    const { footer } = await getDictionary(params.lang)

    return (
        <div className="flex justify-center border-t border-primary py-4 px-4">
            <h3 className="text-h3 text-lg">{footer.title}</h3>
        </div>
    )
}
export default Footer