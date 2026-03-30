import Image from "next/image";
import Link from "next/link";
import ReviewCard from "../components/ReviewCard";
import FaqItem from "../components/FaqItem";
import { PRODUCT_CONFIG } from "../config/products";

export const metadata = {
  title: PRODUCT_CONFIG.metadata.title,
  description: PRODUCT_CONFIG.metadata.description,
};

export default function Home() {
  const { amazonLink, slug, title, badge, image, benefits, reviews, faqs, footer } = PRODUCT_CONFIG;

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-white border-b py-4 text-center">
        <div className="text-red-600 text-xs font-bold text-center py-2 uppercase tracking-wide">
          Exclusive Amazon Partner Deals • Limited Stock Available
        </div>
      </header>

      <section className="max-w-xl mx-auto px-6 py-8 md:py-16">
        {/* BADGE DINÂMICO */}
        <div className="flex justify-center mb-4">
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-yellow-200">
            {badge}
          </span>
        </div>

        {/* TÍTULO DINÂMICO */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight mb-6">
          {title.prefix} <span className="text-orange-600">{title.highlight}</span>
        </h2>

        <div className="relative w-full mb-8 rounded-2xl overflow-hidden shadow-lg border bg-white flex justify-center">
            <Image 
                src={PRODUCT_CONFIG.image.src} 
                alt={PRODUCT_CONFIG.image.alt} 
                width={600}  // Adicione uma largura base
                height={600} // Adicione uma altura base
                className="w-full h-auto object-contain" 
                priority
            />
        </div>

        {/* LISTA DE BENEFÍCIOS DINÂMICA */}
        <div className="space-y-4 mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="bg-green-100 p-1 rounded-full text-green-600 font-bold">✓</div>
              <p className="text-gray-700"><strong>{b.label}:</strong> {b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA PRINCIPAL */}
        <div className="sticky bottom-6 md:static z-10">
          <div className="flex items-center justify-center gap-2 mb-3 text-sm font-semibold text-green-600 bg-white/90 backdrop-blur-sm py-1.5 rounded-full shadow-sm border border-green-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Price Update: Checked today, {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </div>
          <a 
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            id={`click_amazon_${slug}_main`}
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          >
            Check Price on Amazon
            <span className="block text-xs font-normal opacity-80 mt-1">Free Shipping for Prime Members</span>
          </a>
        </div>

        <div className="mt-4 mb-16 text-center text-xs text-gray-400">
          <p className="mb-2">Prices and availability are subject to change.</p>
          <p className="text-gray-500 font-medium">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>

        {/* REVIEWS DINÂMICAS */}
        <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">What Customers are Saying</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.items.map((r, i) => (
                  <ReviewCard key={i} quote={r.quote} author={r.author} />
                ))}
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 flex items-center justify-center">
                    <div className='text-center'>
                        <p className="text-4xl font-extrabold text-yellow-700">{reviews.summary.score}</p>
                        <p className="text-xs text-yellow-800 font-medium">Over {reviews.summary.count} global ratings on Amazon.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ DINÂMICO */}
        <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h3>
            <div className="space-y-4">
                {faqs.map((item, index) => (
                    <FaqItem key={index} question={item.q} answer={item.a} />
                ))}
            </div>
        </div>

        {/* FOOTER CTA DINÂMICO */}
        <div className="mt-12 py-10 border-t border-gray-100 flex flex-col items-center bg-gray-50/50 w-full rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center px-4">{footer.ctaTitle}</h3>
          <a 
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            id={`click_amazon_${slug}_footer`}
            className="bg-[#FF7A00] hover:bg-[#E66E00] text-white font-extrabold py-4 px-10 rounded-xl shadow-xl transition-all hover:scale-105 text-center flex flex-col"
          >
            Check Current Price on Amazon
            <span className="text-xs font-normal opacity-80 mt-1">Free Shipping for Prime Members</span>
          </a>
        </div>
      </section>

      <footer className="bg-white border-t py-8 px-6 text-center text-gray-500 text-sm">
        <p>Joined over {reviews.summary.count} happy customers on Amazon.</p>
        <div className="mt-2 text-yellow-400 text-lg">★★★★★</div>
        <div className="mt-6">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-600 underline text-xs">Privacy Policy</Link>
        </div>
      </footer>
    </main>
  );
}