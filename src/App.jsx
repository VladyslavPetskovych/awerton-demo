import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Philosophy from './components/sections/Philosophy'
import HowWeWork from './components/sections/HowWeWork'
import Strategy from './components/sections/Strategy'
import Stories from './components/sections/Stories'
// Hidden for now — re-enable by restoring this import and <Investment /> below.
// import Investment from './components/sections/Investment'
import Portfolio from './components/sections/Portfolio'
import Request from './components/sections/Request'
import Footer from './components/sections/Footer'
import ServicesPage from './pages/ServicesPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <HowWeWork />
      <Portfolio />
      <Request />
      <Stories />
      <Strategy />
      {/* <Investment /> */}
    </>
  )
}

// Tiny path-based router: each page is a real URL (Netlify rewrites it to index.html).
const routes = {
  '/': HomePage,
  '/services': ServicesPage,
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const Page = routes[path] ?? HomePage

  return (
    <>
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  )
}
