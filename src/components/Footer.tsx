function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg" alt="DS3 Comunicaciones" className="w-32 h-auto" />
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-800">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl" aria-hidden="true"></i>
              </a>
              <a href="https://wa.me/994428965?text=Hola%20necesito%20ayuda" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-800">Correo</h3>
            <a href="mailto:netperu100@hotmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
              <i className="fas fa-envelope mr-2" aria-hidden="true"></i>
              netperu100@hotmail.com
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Soluciones</h3>
          <ul className="space-y-2">
            <li><a className="text-gray-600 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.ds3comunicaciones.com/l-com/AccessPoint.html">Access Point</a></li>
            <li><a className="text-gray-600 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.ds3comunicaciones.com/lcom/AntenasMIMO.html">Antenas MIMO</a></li>
            <li><a className="text-gray-600 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.ds3comunicaciones.com/l-com/AntenasPanel.html">Antenas de Panel</a></li>
            <li><a className="text-gray-600 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.ds3comunicaciones.com/l-com/AntenaSectorial.html">Antenas Sectoriales</a></li>
            <li><a className="text-gray-600 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://ds3comunicaciones.com/l-com/pigtail/Pigtail.html">Cable Pigtail</a></li>
            <li><a className="text-gray-600 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.ds3comunicaciones.com/trendnet/MediaConvert.html">Media Converter</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Soporte</h3>
          <ul className="space-y-2">
            <li><a className="text-gray-600 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.ds3comunicaciones.com/soporte.html">Soporte Técnico</a></li>
            <li><a className="text-gray-600 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://ds3comunicaciones.com/us.html">Acerca de Nosotros</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Contacto</h3>
          <div className="space-y-3">
            <a href="https://wa.me/994428965?text=Hola%20necesito%20ayuda" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-green-600">
              <i className="fas fa-phone-alt mr-2" aria-hidden="true"></i>
              <span>994 428 965</span>
            </a>
            <a href="https://wa.me/996533223?text=Hola%20necesito%20ayuda" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-green-600">
              <i className="fas fa-phone-alt mr-2" aria-hidden="true"></i>
              <span>996 533 223</span>
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Horario de Atención</h3>
            <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
            <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
        <p>© 2025 DS3 Comunicaciones. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
