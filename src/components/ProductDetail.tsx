import { useEffect, useId, useRef, useState } from 'react'

type Breadcrumb = { label: string; href?: string }
type DownloadLink = { label: string; url: string; icon?: 'pdf' | 'book' | 'file' }
type SpecRow = { label: string; value: string }

type ProductDetailProps = {
  title: string
  breadcrumbs: Breadcrumb[]
  price?: string
  ctaUrl?: string
  thumbnails: string[]
  description?: string[]
  specs: string[]
  specsTable?: SpecRow[]
  downloads?: DownloadLink[]
}

function ProductDetail({
  title,
  breadcrumbs,
  price,
  ctaUrl,
  thumbnails,
  description = [],
  specs,
  specsTable = [],
  downloads = [],
}: ProductDetailProps) {
  const safeThumbs = thumbnails.length > 0 ? thumbnails : ['https://via.placeholder.com/800x400?text=Imagen']
  const [active, setActive] = useState<string>(safeThumbs[0])
  const [tab, setTab] = useState<'producto' | 'imagenes'>('producto')
  const [modalOpen, setModalOpen] = useState(false)
  const [zoomVisible, setZoomVisible] = useState(false)
  const dialogTitleId = useId()
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const lastFocusRef = useRef<HTMLElement | null>(null)
  const imageContainerRef = useRef<HTMLDivElement | null>(null)
  const zoomPopupRef = useRef<HTMLDivElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const rectRef = useRef<DOMRect | null>(null)

  useEffect(() => {
    if (modalOpen) {
      lastFocusRef.current = document.activeElement as HTMLElement
      document.body.style.overflow = 'hidden'
      closeBtnRef.current?.focus()
    } else {
      document.body.style.overflow = ''
      lastFocusRef.current?.focus()
    }
  }, [modalOpen])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !zoomPopupRef.current) return
    
    // Cancelar animación anterior si existe
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    // Usar requestAnimationFrame para optimizar el rendimiento
    animationFrameRef.current = requestAnimationFrame(() => {
      if (!imageContainerRef.current || !zoomPopupRef.current) return
      
      // Cachear el rect para evitar recálculos
      if (!rectRef.current) {
        rectRef.current = imageContainerRef.current.getBoundingClientRect()
      }
      
      const rect = rectRef.current
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      const popup = zoomPopupRef.current
      
      // Actualizar posición del zoom instantáneamente
      popup.style.setProperty('--zoom-x', `${x}%`)
      popup.style.setProperty('--zoom-y', `${y}%`)
      
      // Posicionar el popup a la derecha de la imagen
      const offset = 20
      const popupSize = 400
      const windowHeight = window.innerHeight
      
      // Obtener la posición del contenedor de la imagen
      const imageRect = imageContainerRef.current.getBoundingClientRect()
      
      // Posicionar a la derecha de la imagen
      const left = imageRect.right + offset
      let top = imageRect.top + (imageRect.height / 2) - (popupSize / 2)
      
      // Ajustar si se sale de la pantalla
      if (top + popupSize > windowHeight) {
        top = windowHeight - popupSize - offset
      }
      if (top < offset) {
        top = offset
      }
      
      popup.style.left = `${left}px`
      popup.style.top = `${top}px`
    })
  }

  const handleMouseEnter = () => {
    // Limpiar cache del rect al entrar
    rectRef.current = null
    setZoomVisible(true)
  }

  const handleMouseLeave = () => {
    // Limpiar animación pendiente
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    setZoomVisible(false)
  }

  // Inicializar la imagen del zoom cuando cambie la imagen activa
  useEffect(() => {
    if (zoomPopupRef.current) {
      zoomPopupRef.current.style.setProperty('--bg-image', `url(${active})`)
    }
  }, [active])

  // Cleanup de animaciones al desmontar el componente
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <section className="container mx-auto px-4">
      <nav className="border px-3 py-2 text-xs md:text-sm text-slate-600 flex items-center gap-1 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {breadcrumbs.map((bc, idx) => (
          <span key={`${bc.label}-${idx}`} className="flex items-center gap-1">
            {bc.href ? (
              <a
                href={bc.href}
                className="shrink-0 hover:underline hover:text-blue-600"
                target={bc.href.startsWith('http') ? '_blank' : undefined}
                rel={bc.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {bc.label}
              </a>
            ) : (
              <span className="text-slate-800 font-medium shrink-0">{bc.label}</span>
            )}
            {idx < breadcrumbs.length - 1 && (
              <span className="text-gray-400 shrink-0" aria-hidden="true">›</span>
            )}
          </span>
        ))}
      </nav>

      <div className="mt-5 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <div className="bg-white rounded shadow-sm p-4">
            {/* Imagen principal */}
            <div 
              ref={imageContainerRef}
              className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden cursor-zoom-in bg-gray-50 rounded-lg"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setModalOpen(true)}
            >
              <img
                src={active}
                alt="Imagen del producto"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {safeThumbs.map((src) => (
                <button key={src} className={`w-20 h-20 border rounded p-1 hover:border-blue-400 ${active === src ? 'ring-2 ring-blue-500' : ''}`} aria-label="Ver imagen" onClick={() => setActive(src)}>
                  <img src={src} alt="Miniatura" loading="lazy" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:flex-1">
          <div className="bg-white rounded shadow-sm p-4">
            <h1 className="text-lg md:text-xl font-bold text-[#0D274D] mb-2">{title}</h1>
            {(price || ctaUrl) && (
              <div className="mb-6 flex items-center gap-3 flex-wrap">
                {price && <span className="text-2xl font-bold text-blue-600">{price}</span>}
                {ctaUrl && (
                  <a href={ctaUrl} className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium rounded px-4 py-2 hover:bg-blue-700" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                    Comprar ahora
                  </a>
                )}
              </div>
            )}

            <div className="border rounded-md inline-flex overflow-hidden">
              <button className={`px-4 py-2 text-sm font-medium ${tab === 'producto' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setTab('producto')}>
                Producto
              </button>
              <button className={`px-4 py-2 text-sm font-medium ${tab === 'imagenes' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setTab('imagenes')}>
                Imágenes
              </button>
            </div>

            {tab === 'producto' ? (
              <div className="mt-4">
                {description.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-md mb-2">Descripción</h3>
                    <div className="space-y-3 text-gray-700">
                      {description.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                )}
                <h3 className="font-semibold text-md mb-3">Especificaciones técnicas</h3>
                <ul className="space-y-2 text-gray-700">
                  {specs.map((s) => (
                    <li key={s} className="flex items-start text-[#0D274D]">
                      <i className="fa-solid fa-circle text-[10px] mt-1.5 mr-2" aria-hidden="true"></i>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                {specsTable.length > 0 && (
                  <div className="mt-6 overflow-x-auto">
                    <table className="min-w-[320px] w-full border border-blue-500 text-sm">
                      <tbody>
                        {specsTable.map((r) => (
                          <tr key={r.label}>
                            <th className="w-1/2 text-left align-top border border-blue-500 bg-blue-50 px-3 py-2 font-semibold">
                              {r.label}
                            </th>
                            <td className="border border-blue-500 px-3 py-2">{r.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {downloads.length > 0 && (
                  <div className="mt-6 flex gap-3 flex-wrap">
                    {downloads.map((d) => (
                      <a key={d.url} href={d.url} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 border border-gray-200 rounded px-4 py-2 hover:bg-gray-50" target="_blank" rel="noopener noreferrer">
                        {d.icon === 'pdf' && <i className="fas fa-file-pdf text-red-500" aria-hidden="true"></i>}
                        {d.icon === 'book' && <i className="fas fa-book-open text-blue-500" aria-hidden="true"></i>}
                        {!d.icon && <i className="fas fa-file text-blue-500" aria-hidden="true"></i>}
                        <span>{d.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {safeThumbs.map((src) => (
                  <button key={src} className="bg-white rounded shadow-sm overflow-hidden" onClick={() => setModalOpen(true)} aria-label="Ampliar imagen">
                    <img src={src} alt="Vista del producto" className="w-full h-64 object-contain p-4 hover:opacity-90" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup de zoom flotante */}
      <div 
        ref={zoomPopupRef}
        className={`zoom-popup ${zoomVisible ? 'active visible' : 'hidden'}`}
        aria-label="Vista ampliada del producto"
      />

      {modalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby={dialogTitleId}>
          <div className="absolute top-4 left-4 text-white text-base" id={dialogTitleId}>Imagen ampliada</div>
          <button
            ref={closeBtnRef}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Cerrar"
            onClick={() => setModalOpen(false)}
          >
            ×
          </button>
          <img src={active} alt="Imagen ampliada" className="max-w-full max-h-full" />
        </div>
      )}
    </section>
  )
}

export default ProductDetail
