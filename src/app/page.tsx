import Image from "next/image";
import Link from "next/link";
import airFryerImg from "../../public/air_fryer_image.jpg";
import ReviewCard from "../components/ReviewCard";
import FaqItem from "../components/FaqItem";

export const metadata = {
  title: "Best Mini Air Fryer 2026 | Instant Pot Vortex Review",
  description: "Cook smarter with the Instant Pot Vortex 4Qt Air Fryer. Read reviews, FAQs, and find the best daily kitchen deals.",
};

export default function Home() {
  const amazonLink = "https://amzn.to/4sZ31kX"; 

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-white border-b py-4 text-center">
        <h1 className="text-sm font-bold uppercase tracking-widest text-orange-600">
          Daily Kitchen Deals 2026
        </h1>
      </header>

      <section className="max-w-xl mx-auto px-6 py-8 md:py-16">
        <div className="flex justify-center mb-4">
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-yellow-200">
            ★ #1 Best Seller in Air Fryers
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-tight mb-6">
          Cook Smarter, Not Harder with the <span className="text-orange-600">Instant Pot Vortex</span>
        </h2>

        <div className="relative w-full mb-8 rounded-2xl overflow-hidden shadow-lg border bg-white flex justify-center">
            <Image 
                src={airFryerImg} 
                alt="Instant Pot 4Qt Vortex Air Fryer on a white background" 
                className="w-full h-auto object-contain" 
                priority
            />
        </div>

        <div className="space-y-4 mb-10">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 p-1 rounded-full text-green-600 font-bold">✓</div>
            <p className="text-gray-700"><strong>6-in-1 Versatility:</strong> Air fry, roast, broil, bake, reheat, and dehydrate.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 p-1 rounded-full text-green-600 font-bold">✓</div>
            <p className="text-gray-700"><strong>Space Saving:</strong> Perfect size for any countertop and small apartments.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 p-1 rounded-full text-green-600 font-bold">✓</div>
            <p className="text-gray-700"><strong>Healthy Meals:</strong> Get that crispy fried taste with 95% less oil.</p>
          </div>
        </div>

        {/* O BOTÃO DE OURO (CTA) COM BADGE DE DATA */}
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
            id="click_amazon_airfryer_main"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          >
            Check Price on Amazon
            <span className="block text-xs font-normal opacity-80 mt-1">
              Free Shipping for Prime Members
            </span>
          </a>
        </div>

        <div className="mt-4 mb-16">
          <p className="text-center text-xs text-gray-400 mb-2">
            Prices and availability are subject to change.
          </p>
          <p className="text-center text-xs text-gray-500 font-medium">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
        </div>

        <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">What Customers are Saying</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ReviewCard quote="The perfect size for my dorm room! Cooks chicken wings in minutes." author="Sarah M." />
                <ReviewCard quote="I was skeptical about the 'dehydrate' feature, but it works flawlessly!" author="Mike R." />
                <ReviewCard quote="Reheating leftover pizza in this makes it taste fresh again. Worth every penny." author="Chris B." />
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 flex items-center justify-center">
                    <div className='text-center'>
                        <p className="text-4xl font-extrabold text-yellow-700">4.5/5</p>
                        <p className="text-xs text-yellow-800 font-medium">Over 71,500+ global ratings on Amazon.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- F.A.Q. --- */}
        <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <FaqItem question="Is it too small for a family?" answer="Yes. The 4Qt is perfect for 1-2 people or side dishes. For larger families, consider the 6Qt or 8Qt models." />
                <FaqItem question="How loud is it during operation?" answer="It makes a light hum, similar to a traditional oven fan. It’s significantly quieter than a typical microwave." />
                <FaqItem question="Are the basket and tray dishwasher safe?" answer="Yes! Both are non-stick, very easy to clean by hand or in the dishwasher." />
            </div>
        </div>

        {/* --- FECHAMENTO DE FLUXO (FOOTER CTA) --- */}
        <div className="mt-12 py-10 border-t border-gray-100 flex flex-col items-center bg-gray-50/50 w-full rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center px-4">Ready to upgrade your kitchen?</h3>
          <a 
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            id="click_amazon_airfryer_footer"
            className="bg-[#FF7A00] hover:bg-[#E66E00] text-white font-extrabold py-4 px-10 rounded-xl shadow-xl transition-all hover:scale-105 text-center flex flex-col"
          >
            Check Current Price on Amazon
            <span className="text-xs font-normal opacity-80 mt-1">Free Shipping for Prime Members</span>
          </a>
        </div>
      </section>

      <footer className="bg-white border-t py-8 px-6 text-center text-gray-500 text-sm">
        <p>Joined over 71,500+ happy customers on Amazon.</p>
        <div className="mt-2 text-yellow-400 text-lg">★★★★★</div>
        <div className="mt-6">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-600 underline text-xs">
              Privacy Policy
            </Link>
        </div>
      </footer>
    </main>
  );
}