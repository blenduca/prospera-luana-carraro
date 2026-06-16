import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import AboutEvent from './components/AboutEvent'
import Experience from './components/Experience'
import ForWho from './components/ForWho'
import Conductor from './components/Conductor'
import Speakers from './components/Speakers'
import Testimonials from './components/Testimonials'
import Signup from './components/Signup'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[72px]">
        <Hero />
        <PainPoints />
        <AboutEvent />
        <Experience />
        <ForWho />
        <Conductor />
        <Speakers />
        <Testimonials />
        <Signup />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
