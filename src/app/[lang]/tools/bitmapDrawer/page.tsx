import { Locale } from "i18n.config";
import { getDictionary } from "dictionaries/dictionary";
import BitmapDrawerWrapper from "./components/BitmapDrawerWrapper";

async function BitmapDrawerPage({ params }: { params: { lang: Locale } }) {
    const { bitmapDrawer } = await getDictionary(params.lang)

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-h1 w-fit text-4xl mb-6">{bitmapDrawer.title}</h1>
            <BitmapDrawerWrapper />
        </div>
    )
}
export default BitmapDrawerPage