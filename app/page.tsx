import { Navbar } from "@/components";
import Link from "next/link";
import AboutPage from "./(general)/about/page";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Navbar fijo o parte superior */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl">
          <AboutPage />

          {/* Enlace a About como página independiente si quieres */}
          <div className="mt-10">
            <Link
              href="/about"
              className="text-teal-300 underline hover:text-teal-200 transition"
            >
              Ver más sobre Apolo
            </Link>
          </div>
        </div>
      </main>

     <Footer />
    </div>
  )
}