export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium ring-1 ring-slate-200">Ergonomic Comfort • Sustainable Build</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              The Chair That Adapts<br className="hidden sm:block"/> To You
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Meet the ChairCraft Ergo — designed to support your posture, boost your focus, and elevate your workspace aesthetics. Breathable mesh, adaptive lumbar, and a silhouette that feels as good as it looks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400/50">
                Shop Ergo Chair
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                Explore Features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img alt="customer" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=64&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fHBlcnNvbnxlbnwwfHx8fDE3MDAwMDAwMDA" className="h-8 w-8 rounded-full object-cover ring-2 ring-white"/>
                <img alt="customer" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=64&auto=format&fit=crop&ixlib=rb-4.0.3" className="h-8 w-8 rounded-full object-cover ring-2 ring-white"/>
                <img alt="customer" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=64&auto=format&fit=crop&ixlib=rb-4.0.3" className="h-8 w-8 rounded-full object-cover ring-2 ring-white"/>
              </div>
              <p><span className="font-semibold">2,500+</span> happy sitters</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-slate-100 to-white blur-xl"/>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img
                alt="Ergonomic chair in a minimalist workspace"
                className="w-full h-[440px] object-cover"
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3"
              />
            </div>
            <div className="mt-3 px-2 text-center text-xs text-slate-500">Photo by Unsplash</div>
          </div>
        </div>
      </div>
    </section>
  );
}
