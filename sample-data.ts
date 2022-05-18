import { GiftsGroup } from 'jobx-ui';

export const groups: GiftsGroup[] = [
  {
    id: 1,
    name: 'Compis de piso',
    description: 'Lista de regalos para los compis de piso',
    tags: ['Deportes de riesgo', 'Libros']
  }, {
    id: 2,
    name: 'Familia',
    description: `Lista de regalos para la famila. Haremos esta descripción 
      algo más larga para comprobar que los elementos del scroll horizontal 
      mantienen el mismo tamaño aunque difieran en contenido. También 
      comprobaremos el comportamiento del componente cuando los elementos crecen
      más allá de la altura máxima establecida. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    tags: ['Familia', 'Deportes']
  }, {
    id: 3,
    name: 'Colegas del trabajo',
    description: 'Lista de regalos para los colegas del trabajo',
    tags: ['Administración', 'Mindfulness']
  }, {
    id: 4,
    name: 'Amigos',
    description: 'Lista de regalos para los amigos',
    tags: ['Deportes', 'Comida']
  }, {
    id: 5,
    name: 'Estudiantes',
    description: 'Lista de regalos para estudiantes',
    tags: ['Libros', 'Revistas']
  }, {
    id: 6,
    name: 'Profesores',
    description: 'Lista de regalos para profesores',
    tags: ['Libros', 'Comida']
  }, {
    id: 7,
    name: 'Músicos',
    description: 'Lista de regalos para músicos',
    tags: ['Instrumentos', 'Entradas conciertos']
  }, {
    id: 8,
    name: 'Niños',
    description: 'Lista de regalos para niños',
    tags: ['Juguetes', 'Revistas']
  }, {
    id: 9,
    name: 'Abuelos',
    description: 'Lista de regalos para abuelos',
    tags: ['Comida', 'Ropa']
  }
];
