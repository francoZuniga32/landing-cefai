// 1. Importa las utilidades de `astro:content`
import { defineCollection } from 'astro:content';
// 2. Define tu colección(es)
const blogCollection = defineCollection({ /* ... */ });
// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
  'blog': blogCollection,
};