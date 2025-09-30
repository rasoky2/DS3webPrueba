type Product = {
  href: string
  image: string
  title: string
  description: string
}

const products: Product[] = [
  {
    href: 'https://web.netperu100.com/cisco/catalyst/C9200L-24P-4G-E.html',
    image: 'https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4G-E_front.jpg',
    title: 'C9200L-24P-4G-E',
    description:
      'Switch Cisco Catalyst 9200L Essentials C9200L-24P, PoE+ (370W), 4x SFP 1G',
  },
  {
    href: 'https://web.netperu100.com/cisco/catalyst/C9200L-24T-4X-E.html',
    image: 'https://web.netperu100.com/cisco/catalyst/images/C9200L-24T-4X-E_front.jpg',
    title: 'C9200L-24T-4X-E',
    description:
      'Switch Cisco Catalyst 9200L 24T, 4x SFP+ 10G, stacking hasta 8 equipos',
  },
  {
    href: 'https://web.netperu100.com/cisco/catalyst/C9200L-24P-4X-E.html',
    image: 'https://web.netperu100.com/cisco/catalyst/images/C9200L-24P-4X-E_front.jpg',
    title: 'C9200L-24P-4X-E',
    description:
      'Switch Cisco Catalyst 9200L 24P PoE+, 4x SFP+ 10G, L3 full',
  },
]

function SimilarProducts() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white bg-[#049FD9] py-4 px-6 rounded-lg shadow inline-block">
            También Disponible: Cisco Catalyst 9200 en stock
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-5 flex flex-col h-full">
                <div className="flex-grow flex items-center justify-center mb-4 h-40">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="border-t pt-4">
                  <div className="flex flex-col items-center mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{p.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-800 transition-colors line-clamp-2">
                    {p.description}
                  </p>
                  <div className="text-center mt-6 text-blue-600 font-semibold">Ver Producto</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimilarProducts
