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
    id: 'filosofa-nicolas-maquiavelo',
    name: 'Nicolas Maquiavelo',
    imagePresentation: '/img/Maquiavelo/Maquiavelo-image-presentation.webp',
    imageSmall: '/img/Maquiavelo/Maquiavelo-image-small.webp',
    topic: 'Empirismo',
    escenaryImage1: '/img/Maquiavelo/escenary-1.webp',
    escenaryImage2: '/img/Maquiavelo/escenary-2.webp',
    phrases2: [
      'El fin justifica los medios.',
      'Es mejor ser temido que amado. si no se puede ser ambos.',
      'Los hombres olvidan más rápido la muerte de su padre que la pérdida de su patrimonio.',
      'El que sube al poder por la ayuda de los demás. llega al poder por la ayuda de los demás. pero el que llega al poder por su propia fuerza. se mantiene en el poder por su propia fuerza.',
      'Los hombres deben ser estimulados o disuadidos de obrar bien o mal no por una virtud que no poseen. sino por la que poseen.',
      'Los hombres se muestran menos precavidos en el mal que en el bien. y cuando reciben un mal trato de alguien. buscan la venganza más que cuando reciben un beneficio.',
      'Los hombres rara vez se reconocen méritos por tener obrado bien. pero se justifican por no haber obrado mal.',
      'La naturaleza del hombre es tal que lo lleva a donde su juicio le permite. y que el juzgar bien o mal del hecho depende del poder o fortuna.'
    ]
  },
  
  {
    id: 'filosofa-erasmus-roterodamus',
    name: 'Erasmus Roterodamus',
    imagePresentation: '/img/Roterodamus/Roterodamus-image-presentation.webp',
    imageSmall: '/img/Roterodamus/Roterodamus-image-small.webp',
    topic: 'Racionalismo',
    escenaryImage1: '/img/Roterodamus/escenary-3.webp',
    phrases2: [
      'La paz más desventajosa es mejor que la guerra más justa.',
      'En el país de los ciegos. el tuerto es el rey.',
      'La verdadera filosofía es la que enseña a vivir bien. no a discurrir con sutileza.',
      'La prevención de males es casi siempre preferible a su corrección.',
      'El que conoce el arte de vivir consigo mismo ignora el aburrimiento.',
      'La felicidad consiste. principalmente. en conformarse con la propia suerte. es querer ser lo que uno es.',
      'Cuanto más se lee. más se aprende y menos se imita.',
      'La educación es la mejor provisión para la vejez.'
    ]
  }, 

  {
    id: 'filosofo-nicolas-cusa',
    name: 'Nicolas de Cusa',
    imagePresentation: '/img/Cusa/Cusa-image-presentation.webp',
    imageSmall: '/img/Cusa/Cusa-image-small.webp',
    topic: 'cristicismo',
    escenaryImage1: '/img/Maquiavelo/escenary-2.webp',
    phrases2: [
      'La ética no es solo un conjunto de normas. sino un modo de ser y estar en el mundo. una forma de construir comunidad.',
      'La verdadera libertad no radica en la ausencia de restricciones. sino en la capacidad de autodeterminación y en la creación de condiciones para la realización personal y colectiva.',
      'El desafío de la filosofía contemporánea es dialogar con la diversidad de perspectivas sin perder de vista la búsqueda de la verdad y el bien común.',
      'La justicia social no es un ideal utópico. sino una meta alcanzable a través del compromiso y la acción solidaria.',
      'La política. entendida en su sentido más profundo. es el arte de vivir juntos. de construir juntos un mundo en el que todos puedan florecer.',
      'La identidad no es una esencia fija. sino un proceso dinámico de construcción y reconstrucción en relación con los otros.',
      'El conocimiento no debe ser un privilegio de unos pocos. sino un derecho fundamental de todos los seres humanos.'
    ]
  },
  {
    id: 'filosofo-Platon',
    name: 'Filosofo Platon',
    imagePresentation: '/img/Platon/Platon-image-presentation.webp',
    imageSmall: '/img/Platon/Platon-image-small.webp',
    topic: 'Racionalismo',
    escenaryImage1: '/img/Platon/escenary-1.webp',
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