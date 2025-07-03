export const metadata = {
    title: "About",
    description: "About Page",
}

export default function AboutPage(){
    return (
        <main className="relative min-h-[calc(100vh-24rem)] bg-gray-900 text-gray-100 flex items-center justify-center px-4">
          {/* Texto decorativo de fondo */}
          <h1 className="absolute text-[5rem] md:text-[8rem] font-bold text-white opacity-5 pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            APOLO
          </h1>
    
          {/* Contenido principal */}
          <div className="relative z-10 text-center max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-300 to-teal-200 text-transparent bg-clip-text mb-4">
              Bienvenido a Apolo
            </h2>
    
            <p className="text-gray-300 text-sm md:text-base">
              La plataforma sencilla y moderna para gestionar el personal de tu empresa de servicios. Controla asistencia, tareas y desempeño con eficiencia.
            </p>
    
            {/* Línea decorativa */}
            <div className="mt-6 flex justify-center">
              <span className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-300 rounded-full animate-pulse" />
            </div>
          </div>
        </main>
      )
}