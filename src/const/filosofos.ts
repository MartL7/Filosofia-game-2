interface Filosofos {
  id: string
  name: string
  imagePresentation: string
  imageSmall: string
  topic: string
  escenaryImage1: string
  escenaryImage2?: string
  phrases?: Questions[]
  phrases2?: string[]
}


interface Questions {
  question: string
  options: string[]
  answer: string
}

export const filosofos: Filosofos[] = [
  {
    id: 'filosofa-margarita-porete',
    name: 'Margarita Porete',
    imagePresentation: '/img/Porete/Porete-image-presentation.webp',
    imageSmall: '/img/Porete/Porete-image-small.webp',
    topic: 'Empirismo',
    escenaryImage1: '/img/Porete/escenary-1.webp',
    escenaryImage2: '/img/Porete/escenary-2.webp',
    phrases: [
      {
        question: '¿Qué es la filosofía según Locke?',
        options: [
          'Es el estudio de la realidad',
          'Es el estudio de la mente',
          'Es el estudio de la moral',
          'Es el estudio de la política'
        ],
        answer: 'Es el estudio de la mente'
      },
      {
        question: '¿Qué es la mente según Locke?',
        options: [
          'Es un tabula rasa',
          'Es una sustancia inmaterial',
          'Es una sustancia material',
          'Es una sustancia espiritual'
        ],
        answer: 'Es un tabula rasa'
      },
      {
        question: '¿Qué es la idea según Locke?',
        options: [
          'Es una representación de la realidad',
          'Es una representación de la mente',
          'Es una representación de la moral',
          'Es una representación de la política'
        ],
        answer: 'Es una representación de la realidad'
      }
    ],
    phrases2: [
      'La razón humana es la única que produce religión y ciencia. ambas. A partir de los mismos principios.',
      'La ilustración es la salida del hombre de su autoculpable inmadurez.',
      'Obra solo según una máxima tal que puedas querer al mismo tiempo que se torne en ley universal.',
      'La moral no se enseña; se aprende por uno mismo.',
      'El espacio y el tiempo son formas de nuestra sensibilidad, son condiciones necesarias bajo las cuales se nos presentan los objetos externos.',
      'La libertad es aquella facultad que aumenta la utilidad de todas las demás facultades.',
      'El deber es la necesidad de actuar por respeto a la ley.',
      'La experiencia sin teoría es ciega. pero la teoría sin experiencia es un mero juego intelectual.'
    ]
  },
  
  {
    id: 'filosofa-christine-de-pizan',
    name: 'Christine de Pizan',
    imagePresentation: '/img/Pizan/Pizan-image-presentation.webp',
    imageSmall: '/img/Pizan/Pizan-image-small.webp',
    topic: 'Racionalismo',
    escenaryImage1: '/img/Pizan/escenary-3.webp',
    phrases: [
      {
        question: '¿Qué es la filosofía según Descartes?',
        options: [
          'Cogito. ergo sum" ("Pienso, luego existo").',
          'Daría todo lo que sé. por la mitad de lo que ignoro.',
          'El buen sentido es la cosa mejor repartida del mundo; porque cada uno piensa estar tan bien provisto de él.',
          'Para investigar la verdad es preciso dudar. en cuanto sea posible. de todas las cosas.',
          'Leer todos los buenos libros es como una conversación con las mejores mentes de los siglos pasados.',
          'La filosofía es la que nos distingue de los salvajes y bárbaros; las naciones son tanto más civilizadas y cultas cuanto mejor filosofan sus hombres.',
          'Dividir cada una de las dificultades que se examinan en tantas partes como sea posible y en cuantas requiera su mejor solución.',
          'No hay nada repartido de modo más equitativo que la razón: todo el mundo está convencido de tener suficiente.'
        ],
        answer: 'Es el estudio de la mente'
      },
      {
        question: '¿Qué es la mente según Descartes?',
        options: [
          'Es un tabula rasa',
          'Es una sustancia inmaterial',
          'Es una sustancia material',
          'Es una sustancia espiritual'
        ],
        answer: 'Es una sustancia inmaterial'
      },
      {
        question: '¿Qué es la idea según Descartes?',
        options: [
          'Es una representación de la realidad',
          'Es una representación de la mente',
          'Es una representación de la moral',
          'Es una representación de la política'
        ],
        answer: 'Es una representación de la realidad'
      }
    ],
    phrases2: [
      'La razón humana es la única que produce religión y ciencia. ambas. A partir de los mismos principios.',
      'La ilustración es la salida del hombre de su autoculpable inmadurez.',
      'Obra solo según una máxima tal que puedas querer al mismo tiempo que se torne en ley universal.',
      'La moral no se enseña; se aprende por uno mismo.',
      'El espacio y el tiempo son formas de nuestra sensibilidad, son condiciones necesarias bajo las cuales se nos presentan los objetos externos.',
      'La libertad es aquella facultad que aumenta la utilidad de todas las demás facultades.',
      'El deber es la necesidad de actuar por respeto a la ley.',
      'La experiencia sin teoría es ciega. pero la teoría sin experiencia es un mero juego intelectual.'
    ]
  }, 

  {
    id: 'filosofo-Immanuel-Kant',
    name: 'Immanuel Kant',
    imagePresentation: '/img/Kant/Kant-image-presentation.webp',
    imageSmall: '/img/Kant/Kant-image-small.webp',
    topic: 'cristicismo',
    escenaryImage1: '/img/Porete/escenary-2.webp',
    phrases: [
      {
        question: '¿Qué es la filosofía según Kant?',
        options: [
          'Es el estudio de la realidad',
          'Es el estudio de la mente',
          'Es el estudio de la moral',
          'Es el estudio de la política'
        ],
        answer: 'Es el estudio de la moral'
      },
      {
        question: '¿Qué es la mente según Kant?',
        options: [
          'Es un tabula rasa',
          'Es una sustancia inmaterial',
          'Es una sustancia material',
          'Es una sustancia espiritual'
        ],
        answer: 'Es una sustancia inmaterial'
      },
      {
        question: '¿Qué es la idea según Kant?',
        options: [
          'Es una representación de la realidad',
          'Es una representación de la mente',
          'Es una representación de la moral',
          'Es una representación de la política'
        ],
        answer: 'Es una representación de la realidad'
      }
    ],
    phrases2: [
      'La razón humana es la única que produce religión y ciencia. ambas. A partir de los mismos principios.',
      'La ilustración es la salida del hombre de su autoculpable inmadurez.',
      'Obra solo según una máxima tal que puedas querer al mismo tiempo que se torne en ley universal.',
      'La moral no se enseña; se aprende por uno mismo.',
      'El espacio y el tiempo son formas de nuestra sensibilidad, son condiciones necesarias bajo las cuales se nos presentan los objetos externos.',
      'La libertad es aquella facultad que aumenta la utilidad de todas las demás facultades.',
      'El deber es la necesidad de actuar por respeto a la ley.',
      'La experiencia sin teoría es ciega. pero la teoría sin experiencia es un mero juego intelectual.'
    ]
  },
  {
    id: 'filosofo-Platon',
    name: 'Filosofo Platon',
    imagePresentation: '/img/Platon/Platon-image-presentation.webp',
    imageSmall: '/img/Platon/Platon-image-small.webp',
    topic: 'Racionalismo',
    escenaryImage1: '/img/Platon/escenary-1.webp',
    phrases: [
      {
        question: '¿Qué es la filosofía según Platón?',
        options: [
          'Es el estudio de la realidad',
          'Es el estudio de la mente',
          'Es el estudio de la moral',
          'Es el estudio de la política'
        ],
        answer: 'Es el estudio de la realidad'
      },
      {
        question: '¿Qué es la mente según Platón?',
        options: [
          'Es un tabula rasa',
          'Es una sustancia inmaterial',
          'Es una sustancia material',
          'Es una sustancia espiritual'
        ],
        answer: 'Es una sustancia inmaterial'
      },
      {
        question: '¿Qué es la idea según Platón?',
        options: [
          'Es una representación de la realidad',
          'Es una representación de la mente',
          'Es una representación de la moral',
          'Es una representación de la política'
        ],
        answer: 'Es una representación de la realidad'
      }
    ],
    phrases2: [
      'La razón humana es la única que produce religión y ciencia. ambas. A partir de los mismos principios.',
      'La ilustración es la salida del hombre de su autoculpable inmadurez.',
      'Obra solo según una máxima tal que puedas querer al mismo tiempo que se torne en ley universal.',
      'La moral no se enseña; se aprende por uno mismo.',
      'El espacio y el tiempo son formas de nuestra sensibilidad, son condiciones necesarias bajo las cuales se nos presentan los objetos externos.',
      'La libertad es aquella facultad que aumenta la utilidad de todas las demás facultades.',
      'El deber es la necesidad de actuar por respeto a la ley.',
      'La experiencia sin teoría es ciega. pero la teoría sin experiencia es un mero juego intelectual.'
    ]
  }
]