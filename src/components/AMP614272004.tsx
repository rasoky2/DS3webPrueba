import ProductDetail from './ProductDetail'

function AMP614272004() {
  return (
    <ProductDetail
      title="Cable UTP AMP Categoría 6 CMR 23AWG 6-1427200-4"
      breadcrumbs={[
        { label: 'Inicio', href: 'https://www.ds3comunicaciones.com/index.html' },
        { label: 'AMP', href: 'https://www.ds3comunicaciones.com/AMP/index.html' },
        { label: 'Cable de red Cat 6', href: 'https://www.ds3comunicaciones.com/AMP/index.html#cablecat6' },
        { label: '6-1427200-4' },
      ]}
      price={'U$ 187.00'}
      ctaUrl={'https://www.ds3comunicaciones.com/pedido.html'}
      thumbnails={[
        'https://www.ds3comunicaciones.com/AMP/images/6-1427200-4-1.jpg',
        'https://www.ds3comunicaciones.com/AMP/images/Caja.jpg',
      ]}
      description={[
        'Los Cables AMP NetConnect categoría 6 exceden los requerimientos TIA/EIA-568-B.2-1 e ISO / IEC 11801 Clase E.',
        'Además cumplen con todos los requisitos de rendimiento para aplicaciones actuales y propuestas, tales como Gigabit Ethernet (1000BASE-TX), 10/100BASE-TX, Token Ring, ATM 155 Mbps, 100 Mbps TPPMD, Video ISDN, analógico y digital, y voz (VoIP).',
        'AMP NetConnect categoría 6 cables UTP están disponibles en (CMR) colores estándar, incluyendo blanco, gris y azul. El embalaje es en un reel-in-box, con el estándar 1000 ft libres de empalme longitudinales.',
        'El rendimiento del cable debe ser verificado independientemente y caracterizado a 600 MHz. Se suministra en carrete-in-box. La verificación de inflamabilidad cumple NEC artículo 800 y NFPA 70, CMR (ANSI/UL 1666, IEC 332-1). El cable horizontal debe ser AMP NETCONNECT número X-1427200-X.',
      ]}
      specs={[
        'Cable UTP Categoría 6, 23 AWG, chaqueta CMR',
        'Cumple TIA/EIA-568-B.2-1 e ISO/IEC 11801 Clase E',
        'Longitud: 1000 ft (reel-in-box), libre de empalmes longitudinales',
        'Aplicaciones: 10/100/1000BASE-T, Token Ring, ATM 155 Mbps, VoIP',
      ]}
      specsTable={[
        { label: 'Voltage', value: '300VAC or VDC' },
        { label: 'Velocidad Nominal de Propagación', value: '70%' },
        { label: 'Temperatura de Operación', value: '-20 °C a -60 °C' },
        { label: 'Temperatura de Almacenamiento', value: '-20 °C a -80 °C' },
      ]}
      downloads={[
        { label: 'Datos Técnicos (PDF)', url: 'https://www.ds3comunicaciones.com/AMP/files/6-1427200-4-DS.pdf', icon: 'pdf' },
      ]}
    />
  )
}

export default AMP614272004
