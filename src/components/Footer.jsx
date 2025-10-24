export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center font-semibold">C</div>
              <span className="font-semibold tracking-tight">ChairCraft</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">Thoughtfully designed chairs that keep you comfortable and productive — without compromising on style or sustainability.</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 text-sm text-slate-600 space-y-1">
              <li>Email: support@chaircraft.example</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Mon–Fri, 9am–6pm</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 text-sm text-slate-600 space-y-1">
              <li><a className="hover:text-slate-900" href="#features">Features</a></li>
              <li><a className="hover:text-slate-900" href="#buy">Pricing</a></li>
              <li><a className="hover:text-slate-900" href="#home">Home</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ChairCraft Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
