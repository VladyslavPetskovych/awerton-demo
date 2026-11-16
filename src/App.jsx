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
import GuidesPage from './pages/GuidesPage'
import PropertyPage from './pages/PropertyPage'
import { propertyBySlug } from './content/portfolio'
import { parseLocation, useDocumentTitle, useI18n } from './i18n'
import { useOrganicMotion } from './motion'

function HomePage() {
  const { t } = useI18n()
  useDocumentTitle(t.meta.home)

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
  '/guides': GuidesPage,
}

export default function App() {
  // The /en prefix only picks the language (see src/i18n); the rest of the path picks the page.
  const path = parseLocation().path.replace(/\/+$/, '') || '/'
  // /portfolio/<slug> → that property's page (unknown slugs fall back to the home page).
  const property = propertyBySlug(path.match(/^\/portfolio\/([^/]+)$/)?.[1])
  const Page = routes[path] ?? HomePage
  useOrganicMotion()

  return (
    <>
      <Header />
      <main>
        {property ? <PropertyPage key={property.slug} property={property} /> : <Page />}
      </main>
      <Footer />
    </>
  )
}
