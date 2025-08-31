import { getDictionary } from "dictionaries/dictionary";
import { type Locale } from "i18n.config";

async function Footer({ params }: { params: { lang: Locale } }) {
  const { footer } = await getDictionary(params.lang);

  return (
    <footer className="mt-12 flex justify-center bg-bgSecondary px-4 py-4 md:mt-16">
      <h3 className="text-center text-lg text-h3">{footer.title}</h3>
    </footer>
  );
}
export default Footer;
