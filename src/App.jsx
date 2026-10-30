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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <HowWeWork />
        <Portfolio />
        <Request />
        <Stories />
        <Strategy />
        {/* <Investment /> */}
      </main>
      <Footer />
    </>
  )
}
