export default function ProductCategories() {
  return (
    <main className="grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Product Categories</h1>
        <p className="text-slate-500">Explore the wide range of products you can source through Donau AI.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover: transition-all">
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <i className="ph ph-t-shirt text-4xl text-slate-400 group-hover:text-blue-600 transition-colors"></i>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 mb-1">Apparel & Fashion</h3>
            <p className="text-xs text-slate-500">450+ Manufacturers</p>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover: transition-all">
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <i className="ph ph-armchair text-4xl text-slate-400 group-hover:text-blue-600 transition-colors"></i>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 mb-1">Home & Furniture</h3>
             <p className="text-xs text-slate-500">300+ Manufacturers</p>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover: transition-all">
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <i className="ph ph-desktop text-4xl text-slate-400 group-hover:text-blue-600 transition-colors"></i>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 mb-1">Electronics</h3>
             <p className="text-xs text-slate-500">200+ Manufacturers</p>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover: transition-all">
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <i className="ph ph-first-aid-kit text-4xl text-slate-400 group-hover:text-blue-600 transition-colors"></i>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 mb-1">Health & Beauty</h3>
             <p className="text-xs text-slate-500">150+ Manufacturers</p>
          </div>
        </div>
         <div className="bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover: transition-all">
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <i className="ph ph-package text-4xl text-slate-400 group-hover:text-blue-600 transition-colors"></i>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 mb-1">Packaging</h3>
             <p className="text-xs text-slate-500">500+ Manufacturers</p>
          </div>
        </div>
         <div className="bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover: transition-all">
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <i className="ph ph-soccer-ball text-4xl text-slate-400 group-hover:text-blue-600 transition-colors"></i>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 mb-1">Sports & Outdoors</h3>
             <p className="text-xs text-slate-500">120+ Manufacturers</p>
          </div>
        </div>
         <div className="bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover: transition-all">
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <i className="ph ph-baby text-4xl text-slate-400 group-hover:text-blue-600 transition-colors"></i>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 mb-1">Toys & Baby</h3>
             <p className="text-xs text-slate-500">90+ Manufacturers</p>
          </div>
        </div>
         <div className="bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover: transition-all">
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <i className="ph ph-paw-print text-4xl text-slate-400 group-hover:text-blue-600 transition-colors"></i>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 mb-1">Pet Supplies</h3>
             <p className="text-xs text-slate-500">80+ Manufacturers</p>
          </div>
        </div>
      </div>
    </main>
  )
}
