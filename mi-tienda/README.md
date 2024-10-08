# Segunda pre-entrega de tu Proyecto final

**Formato:** Link a último commit de git donde se cumplan los objetivos + GIF mostrando la navegabilidad. Debe tener el nombre **“PreEntrega2+Apellido”**. 

## Consigna.

- Configura en **App.js** el routing usando un *BrowserRouter* de tu aplicación con react-router-dom

- Componentes:
  - Navbar con cart
  - Catálogo
  - Detalle de producto
- Objetivos.
  - Deberás desarrollar la navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle.

## Se debe entregar.

- Rutas a configurar
  - ‘/’ navega a <ItemListContainer />
  - ‘/category/:id’  <ItemListContainer />
  - ‘/item/:id’ navega a <ItemDetailContainer />
- Links a configurar
  - Clickear en el brand debe navegar a ‘/’
  - Clickear un Item.js debe navegar a /item/:id
  - Clickear en una categoría del navbar debe navegar a /category/:categoryId 

Para finalizar deberá integrar los parámetros de tus **async-mocks** para reaccionar a *:itemId* y *:categoryId* ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría.
- **Notas**: 
  - No usar **HashRouter** como en el ejemplo del gif (usar **BrowserRouter**)
  - Utilizar el id de la categoría como nombre en la URL param en vez de números (vehículos, por ej)
  - Utilizar el id del item como URL param
  - Link a **GIF** de ejemplo: https://docs.google.com/presentation/d/1FOtUQekNnCgOx7bdVyfoE76sOYl9qLmQE8xkpHaiVEw/edit#slide=id.g138298fd225_0_371