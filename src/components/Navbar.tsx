import { useEffect, useState } from 'react'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav className="bg-white w-full shadow border-b">
      <div className="container mx-auto px-4">
        <div className="hidden lg:flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <img
              src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg"
              alt="DS3"
              className="h-10"
            />
          </div>
          <div className="flex items-center gap-8 text-black">
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <div className="text-sm font-semibold leading-tight">
                <p>533-4339</p>
                <p>994-428-965</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <div className="text-sm font-semibold leading-tight">
                <p>99653-3223</p>
                <p>937-514-867</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span className="text-sm font-semibold">netperu100@hotmail.com</span>
            </div>
            <img
              src="https://www.ds3comunicaciones.com/cisco/images/cisco-gif.gif"
              alt="Cisco"
              className="h-8"
            />
          </div>
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Abrir búsqueda"
          >
            <i className="fas fa-search text-black"></i>
          </button>
        </div>

        <div className="lg:hidden flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded hover:bg-gray-200"
              aria-label="Abrir menú"
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <i className="fas fa-bars text-black"></i>
            </button>
            <img
              src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg"
              alt="DS3"
              className="h-9"
            />
            <img
              src="https://www.ds3comunicaciones.com/cisco/images/logo-cisco.gif"
              alt="Cisco"
              className="h-9"
            />
          </div>
          <a
            className="p-2 rounded border border-black hover:bg-gray-200"
            aria-label="Abrir búsqueda"
            href="#buscar"
          >
            <i className="fas fa-search text-black"></i>
          </a>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            id="menu-overlay"
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          ></div>
          <aside
            id="mobile-menu"
            className="fixed top-0 left-0 h-full w-80 bg-white z-50 shadow transform transition-transform"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <div className="flex justify-end p-4">
              <button
                className="p-2 rounded hover:bg-gray-100"
                aria-label="Cerrar menú"
                onClick={() => setMobileOpen(false)}
                autoFocus
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            <nav className="px-6 pb-8 space-y-2">
              <a className="block py-2 border-b text-blue-600" href="https://www.ds3comunicaciones.com/cisco/precios_cisco_b.html" target="_blank" rel="noopener noreferrer">Lista Completa</a>
              <a className="block py-2 border-b text-blue-600" href="https://www.ds3comunicaciones.com/cisco/precios_cisco_access_point_b.html" target="_blank" rel="noopener noreferrer">Access Point</a>
              <a className="block py-2 border-b text-blue-600" href="https://www.ds3comunicaciones.com/cisco/precios_cisco_switch_catalyst_b.html" target="_blank" rel="noopener noreferrer">Switch Catalyst</a>
              <a className="block py-2 border-b text-blue-600" href="https://ds3comunicaciones.com/cisco/precios_cisco_meraki_b.html" target="_blank" rel="noopener noreferrer">Cisco Meraki</a>
            </nav>
          </aside>
        </>
      )}
    </nav>
  )
}

export default Navbar
