
import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <MainHeader />
      <main className="grow max-w-7xl mx-auto w-full px-8 py-12">
        {children}
      </main>
      <MainFooter />
    </div>
  )
}
