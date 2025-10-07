export interface Blog {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  images?: string[];
  date: string;
  slug: string;
  category: 'fotografia' | 'moda' | 'eventos' | 'consejos';
  author: string;
  readTime: number; // en minutos
  externalUrl?: string;
  externalUrlLabel?: string;
}

const blogs: Blog[] = [
  {
    id: 7,
    title: 'Colaboración con Tissa Fontaneda: texturas, luz y carácter',
    summary: 'Detrás de escena de nuestra producción con Tissa Fontaneda: una narrativa visual centrada en materiales, color y actitud.',
    content: `Trabajar de la mano de Tissa Fontaneda es entrar en un universo de diseño táctil y elegancia funcional. En esta producción pusimos el foco en tres pilares: textura, color y presencia. Cada encuadre buscó honrar la arquitectura del bolso y la interacción con la luz de verano.

Abrimos la historia con una imagen principal potente y limpia, dejando que el material y los volúmenes respiren. A partir de ahí, el desarrollo visual alterna planos generales con detalles, generando ritmo y énfasis en costuras, acabados y forma. El styling, sobrio y contemporáneo, refuerza la identidad de marca sin distraer del protagonista: la pieza.

La luz fue clave: suave, direccional y con matices cálidos para mantener la belleza del material. En edición cuidamos el contraste fino y la separación tonal para que cada imagen conserve textura sin perder naturalidad. El resultado: una serie coherente que comunica calidad y carácter, alineada con el lenguaje atemporal de Tissa Fontaneda.

Este tipo de proyectos nos recuerda por qué amamos la fotografía de moda: cuando el objeto tiene alma, la cámara solo tiene que escuchar.`,
    image: '/Portafolio Drafter 2025 julio/moda/TISSA BAGS/Tissa_Summer-13.webp',
    images: [
      '/Portafolio Drafter 2025 julio/moda/TISSA BAGS/Tissa_Summer-13.webp',
      '/Portafolio Drafter 2025 julio/moda/TISSA BAGS/Tissa_Detalle-2.webp',
      '/Portafolio Drafter 2025 julio/moda/TISSA BAGS/Tissa_Summer-3.webp'
    ],
    date: '2025-10-07',
    slug: 'tissa-fontaneda-drafter',
    category: 'moda',
    author: 'Drafter Studio',
    readTime: 4,
    externalUrl: 'https://www.tissafontaneda.com/?utm_source=drafter.es&utm_medium=referral&utm_campaign=blog_tissa_2025',
    externalUrlLabel: 'Visitar tienda oficial'
  },
  {
    id: 1,
    title: '¡Madrid nunca duerme!',
    summary: 'Reviviendo una Noche Inolvidable en Madrid: Fotografía de Eventos y Fiestas.',
    content: `Reviviendo una Noche Inolvidable en Madrid: Fotografía de Eventos y Fiestas
18/02/2025
Madrid nunca duerme, y aquella noche mi cámara tampoco lo hizo. Como fotógrafo te debes sumergir en la energía vibrante de la ciudad para capturar momentos únicos en bares, discotecas y fiestas privadas. Cada sonrisa, cada brindis y cada paso de baile quedaron inmortalizados en imágenes que reflejan la esencia de la diversión nocturna.

Una Fiesta Llena de Magia y Diversión
Salir de copas con amigos a Espit Chupitos, celebrar un cumpleaños en Enbabia o simplemente disfrutar de una noche especial en Planet Club siempre deja recuerdos imborrables. Aquella noche, la música retumbaba en cada rincón de los bares, las luces neón daban un aire electrizante y cálido  al ambiente, la gente se entregaba por completo al momento. Logré sentir y capturar instantes de pura emoción: abrazos entre amigos, risas espontáneas y bailes con mucho flow que definieron la velada.

Capturando la Esencia de la Noche en Vídeo
Además de las fotografías, grabé vídeos que lograron encapsular la energía del evento. Desde los primeros shots hasta la última canción de soulja boy, cada toma reflejaba la emoción y la intensidad de la noche. Al revisar el material, pude revivir la alegría del momento, como si la fiesta nunca hubiera terminado.

Una Experiencia que Quedará para Siempre
Esa noche en Madrid fue inolvidable, tanto para quienes la vivieron como para mí detrás de la cámara. Ser parte de eventos tan vibrantes y poder transformarlos en recuerdos tangibles es lo que hace que mi pasión por la fotografía siga creciendo. Queda en las imágenes el testimonio de una noche épica, una historia visual que merece ser contada una y otra vez.`,
    image: '/social/Enbabia_abril_2025-14.webp',
    images: [
      '/social/DSC04997.webp',
      '/social/Party_Tour_-15.webp',
      '/social/Enbabia_abril_2025-29.webp'
    ],
    date: '2025-06-01',
    slug: 'madrid-nunca-duerme',
    category: 'eventos',
    author: 'Drafter Studio',
    readTime: 4
  },
  {
    id: 2,
    title: 'Cómo preparar tu sesión de fotos profesional',
    summary: 'Consejos prácticos para sacar el máximo partido a tu sesión de fotos en estudio o exteriores.',
    content: `Una sesión de fotos profesional exitosa comienza mucho antes de que se active el primer disparo. La preparación es clave para lograr resultados excepcionales que superen las expectativas.

La comunicación previa con tu fotógrafo es fundamental. Comparte tus ideas, inspiraciones y objetivos para la sesión. En Drafter Studio, dedicamos tiempo a entender tu visión y crear un plan personalizado que refleje tu personalidad y estilo único.

La elección del vestuario es crucial. Selecciona prendas que te hagan sentir confiado y que reflejen tu estilo personal. Considera la paleta de colores y cómo se complementará con el entorno y la iluminación planificada.

El cuidado personal también juega un papel importante. Descansa bien la noche anterior, mantén tu rutina de cuidado de la piel y considera un peinado y maquillaje que te haga sentir seguro. Recuerda que la confianza se refleja en las imágenes.

Durante la sesión, confía en tu fotógrafo y mantén una mente abierta. Las mejores fotos suelen surgir cuando te relajas y te dejas llevar por el momento. En Drafter Studio, creamos un ambiente relajado y profesional donde puedes ser tú mismo.

La post-producción es donde la magia realmente sucede. Nuestro equipo de edición trabaja meticulosamente para realzar la belleza natural de cada imagen, manteniendo la autenticidad mientras perfeccionamos los detalles técnicos.`,
    image: '/Moda/PORTADA 2.webp',
    date: '2025-05-20',
    slug: 'preparar-sesion-fotos',
    category: 'consejos',
    author: 'Drafter Studio',
    readTime: 6
  },
  {
    id: 3,
    title: 'La importancia de la luz en la fotografía creativa',
    summary: 'Exploramos cómo la iluminación transforma una imagen y aporta emoción y profundidad a tus proyectos.',
    content: `La luz es el elemento fundamental que da vida a la fotografía. No es solo una herramienta técnica, sino el lenguaje a través del cual contamos historias visuales que conectan emocionalmente con el espectador.

La luz natural, con su calidad cambiante a lo largo del día, ofrece posibilidades infinitas para crear atmósferas únicas. La hora dorada, ese momento mágico justo antes del atardecer, baña todo con una calidez que es imposible de replicar artificialmente.

La luz artificial, por otro lado, nos da control total sobre el ambiente. En Drafter Studio, utilizamos técnicas avanzadas de iluminación para crear escenarios que van desde lo íntimo y dramático hasta lo vibrante y energético.

La dirección de la luz es crucial para definir la forma y el volumen. La luz lateral crea sombras que añaden profundidad y drama, mientras que la luz frontal suaviza las características y crea un look más directo y accesible.

La temperatura de color de la luz afecta profundamente el estado de ánimo de la imagen. Las luces cálidas transmiten calidez y cercanía, mientras que las luces frías crean una atmósfera más distante y misteriosa.

En la fotografía de moda, la luz se convierte en un elemento narrativo que complementa la historia que queremos contar. Cada decisión de iluminación está cuidadosamente considerada para realzar la belleza del sujeto y transmitir el mensaje deseado.`,
    image: '/Moda/LeoHanna-20.webp',
    images: [
      '/Moda/LeoHanna-20.webp',
      '/Moda/B&W Pina-14.webp',
      '/Moda/S&X-10.webp',
      '/Moda/her.webp'
    ],
    date: '2025-04-15',
    slug: 'importancia-luz-fotografia',
    category: 'fotografia',
    author: 'Drafter Studio',
    readTime: 5
  },
  {
    id: 4,
    title: 'Fotografía de moda en exteriores',
    summary: 'Técnicas y consejos para aprovechar la luz natural y crear imágenes impactantes en exteriores.',
    content: `La fotografía de moda en exteriores ofrece una libertad creativa que es difícil de lograr en un estudio. La naturaleza se convierte en nuestro estudio, proporcionando fondos únicos y luz natural que cambia constantemente.

Madrid, con su rica arquitectura y espacios urbanos vibrantes, ofrece innumerables oportunidades para crear imágenes impactantes. Desde las calles históricas del centro hasta los parques modernos, cada ubicación tiene su propia personalidad.

La planificación es esencial cuando trabajamos en exteriores. Estudiamos la luz del día, las condiciones climáticas y el flujo de personas para elegir el momento perfecto para la sesión. La flexibilidad es clave, ya que las condiciones pueden cambiar rápidamente.

La interacción entre el modelo y el entorno es fundamental. En Drafter Studio, trabajamos para que el sujeto se sienta parte del paisaje, creando una narrativa visual coherente donde la moda y el entorno se complementan perfectamente.

Los elementos naturales como el viento, la lluvia o las sombras se convierten en aliados creativos. Aprovechamos estos elementos para añadir dinamismo y autenticidad a las imágenes, creando momentos únicos que no se pueden recrear.

La post-producción en fotografía de exteriores requiere un enfoque cuidadoso para mantener el equilibrio entre la luz natural y los elementos artificiales, asegurando que el resultado final sea coherente y visualmente atractivo.`,
    image: '/Moda/DSC07894.webp',
    images: [
      '/Moda/LeoHanna-24.webp',
      '/Moda/LeoHanna-21.webp',
      '/Moda/DSC07790.webp'
    ],
    date: '2025-03-10',
    slug: 'fotografia-moda-exteriores',
    category: 'moda',
    author: 'Drafter Studio',
    readTime: 7
  },
  {
    id: 5,
    title: 'Retratos profesionales que cuentan historias',
    summary: 'Cómo crear retratos que no solo muestren, sino que narren y conecten emocionalmente con el espectador.',
    content: `Un retrato profesional va más allá de simplemente capturar una imagen. Es una oportunidad para contar una historia, revelar la esencia de una persona y crear una conexión emocional duradera con el espectador.

La conexión entre el fotógrafo y el sujeto es fundamental. En Drafter Studio, dedicamos tiempo a conocer a cada persona, entender sus aspiraciones y crear un ambiente de confianza donde pueden ser completamente auténticos.

La composición en retratos es un arte que combina técnica y creatividad. Cada elemento en el encuadre debe contribuir a la narrativa, desde la expresión del sujeto hasta los elementos del fondo que complementan la historia.

La iluminación en retratos es especialmente importante, ya que puede realzar o suavizar características, crear atmósfera y dirigir la atención del espectador hacia los elementos más importantes de la imagen.

Los retratos en blanco y negro tienen un poder especial para transmitir emociones. Al eliminar las distracciones del color, nos enfocamos en la forma, la textura y la expresión, creando imágenes atemporales que trascienden las tendencias.

Cada retrato que creamos en Drafter Studio es único, reflejando la individualidad del sujeto mientras mantenemos nuestra firma visual distintiva. Nuestro objetivo es crear imágenes que no solo se vean hermosas, sino que también cuenten una historia significativa.`,
    image: '/Moda/B&W Pina-14.webp',
    images: [
      '/Moda/B&W Pina-14.webp',
      '/Moda/LeoHanna-20.webp',
      '/Moda/S&X-10.webp'
    ],
    date: '2025-02-25',
    slug: 'retratos-profesionales-historias',
    category: 'fotografia',
    author: 'Drafter Studio',
    readTime: 6
  },
  {
    id: 6,
    title: 'El arte del estilismo en fotografía de moda',
    summary: 'Descubre cómo el estilismo puede transformar completamente una imagen y crear narrativas visuales únicas.',
    content: `El estilismo en fotografía de moda es mucho más que simplemente elegir ropa. Es un proceso creativo que combina moda, arte y narrativa para crear imágenes que trascienden lo comercial y se convierten en obras de arte visual.

Un buen estilista entiende que cada prenda, accesorio y detalle contribuye a la historia que queremos contar. En Drafter Studio, trabajamos con estilistas que comparten nuestra visión de crear imágenes únicas y memorables.

La paleta de colores es fundamental en el estilismo. Los colores no solo deben complementarse entre sí, sino también trabajar en armonía con el entorno, la iluminación y el estado de ánimo que queremos transmitir.

Los accesorios son elementos narrativos poderosos que pueden transformar completamente una imagen. Desde joyería sutil hasta piezas llamativas, cada accesorio debe tener un propósito y contribuir a la narrativa visual.

La textura y las telas añaden dimensión y profundidad a las imágenes. La forma en que la luz interactúa con diferentes materiales puede crear efectos visuales fascinantes que enriquecen la composición.

En Drafter Studio, el estilismo es una colaboración creativa donde cada decisión está cuidadosamente considerada para crear imágenes que no solo se ven hermosas, sino que también transmiten un mensaje claro y evocan emociones específicas en el espectador.`,
    image: '/Moda/S&X-10.webp',
    images: [
      '/Moda/S&X-10.webp',
      '/Moda/DSC07790.webp',
      '/Moda/B&W Pina-14.webp',
      '/Moda/LeoHanna-20.webp',
      '/Moda/DSC07894.webp'
    ],
    date: '2025-01-15',
    slug: 'arte-estilismo-fotografia-moda',
    category: 'moda',
    author: 'Drafter Studio',
    readTime: 8
  }
];

export default blogs; 
 