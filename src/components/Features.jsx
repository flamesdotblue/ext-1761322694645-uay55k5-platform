import { Leaf, Shield, Truck, Star } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Adaptive Lumbar Support',
    desc: 'Dynamic lumbar that learns your posture across sessions for day-long comfort and spinal alignment.'
  },
  {
    icon: Leaf,
    title: 'Breathable, Sustainable Mesh',
    desc: 'Recycled, high-tension mesh keeps you cool while reducing environmental impact.'
  },
  {
    icon: Shield,
    title: 'Built To Last',
    desc: 'Precision aluminum frame, silent casters, and a 10-year warranty for total peace of mind.'
  },
  {
    icon: Truck,
    title: 'Free Shipping & Easy Setup',
    desc: 'Arrives in days with minimal assembly. Clear instructions and included tools.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Designed for posture, built for life</h2>
          <p className="mt-3 text-slate-600">Every curve, stitch, and mechanism is engineered to keep you comfortable and focused, from first call to last email.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-slate-900 text-white grid place-items-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="buy" className="mt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-500">ChairCraft Ergo</p>
            <div className="mt-1 flex items-end gap-3">
              <p className="text-3xl font-bold text-slate-900">$349</p>
              <span className="text-sm text-slate-500 line-through">$429</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Limited launch pricing. Ships within 3–5 business days.</p>
          </div>
          <div className="flex gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">Ask a question</a>
            <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/50">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
