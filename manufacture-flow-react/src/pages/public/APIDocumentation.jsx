export default function APIDocumentation() {
  return (
    <main className="grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0 top-24 sticky">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Documentation</h3>
          <ul className="space-y-1">
            <li><a href="#introduction" className="block px-3 py-2 text-blue-600 font-medium bg-blue-50 rounded-lg">Introduction</a></li>
            <li><a href="#authentication" className="block px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg">Authentication</a></li>
            <li><a href="#briefs-api" className="block px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg">Briefs API</a></li>
            <li><a href="#manufacturers-api" className="block px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg">Manufacturers API</a></li>
            <li><a href="#webhooks" className="block px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg">Webhooks</a></li>
          </ul>
        </div>

        {/* Content */}
        <div className="grow max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">API Documentation</h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Welcome to the Donau AI API documentation. Our REST API allows you to integrate Donau AI's manufacturing network directly into your own applications and workflows.
          </p>

          <div className="prose prose-slate max-w-none">
            <h2 id="introduction" className="text-xl font-bold text-slate-900 mb-4 scroll-mt-28">Getting Started</h2>
            <p className="text-slate-500 mb-6">
              To get started, you'll need an API key. You can generate one in your account settings under the "Integrations" tab.
            </p>

            <h2 id="authentication" className="text-xl font-bold text-slate-900 mb-4 scroll-mt-28">Authentication</h2>
            <p className="text-slate-500 mb-6">
              Authenticate requests using your API key in the header.
            </p>

            <div className="bg-slate-900 rounded-xl p-6 mb-8 overflow-x-auto">
              <code className="text-sm font-mono text-green-400">
                curl https://api.donau.ai/v1/briefs \<br />
                &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
              </code>
            </div>

            <h2 id="briefs-api" className="text-xl font-bold text-slate-900 mb-4 scroll-mt-28">Briefs API</h2>
            <p className="text-slate-500 mb-6">
              Endpoints to manage product briefs.
            </p>

            <h2 id="manufacturers-api" className="text-xl font-bold text-slate-900 mb-4 scroll-mt-28">Manufacturers API</h2>
            <p className="text-slate-500 mb-6">
              Endpoints to search and filter manufacturers.
            </p>

            <h2 id="webhooks" className="text-xl font-bold text-slate-900 mb-4 scroll-mt-28">Webhooks</h2>
            <p className="text-slate-500 mb-6">
              Subscribe to real-time events.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mb-4">Rate Limits</h2>
            <p className="text-slate-500 mb-6">
              The API is rate limited to 100 requests per minute per user.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
