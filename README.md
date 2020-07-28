# Burger Queen 🍔🔥

## Proceso de Diseño

Pensamos nuestro diseño para que fuera fácilmente adaptable a un dispositivo iPad Pro tanto para el área de cocina como para la de piso.
La interfaz es intuitiva, sencilla y práctica para que el usuario, sea quién se sienta familiarizado rápidamente con la aplicación.
![burger-queen-mexa-bajafidelidad]("https://i.ibb.co/8Kjm25T/burger-queen-mexa-baja.png")

En nuestra app, el área de piso ingresa con un correo previamente asignado por la administración donde tiene acceso a los dos menús que se manejan, puede ver las mesas, aparece la hora en que se hizo la orden, el tiempo que le tomó a cocina tener listo el pedido, los productos elegidos en esta y el total a pagar.
Por el lado de cocina, las ordenes van llegando por hora de entrada e inicia un contador para tener en cuenta el tiempo que les toma tener lista la orden además de que cuando está lista aparecerá en la pantalla y el mesero puede ir rápidamente por ella.
Una vez que la orden ha sido entregada y los comensales están listos para retirarse, la orden puede cerrarse para que la mesa esté lista para una nueva orden.

![burger-queen-mexa]("https://i.ibb.co/XYRr5kf/burger-queen.png")

Puedes ver nuestra app finalizada aquí [Burger Queen Mexa](https://fasez26.github.io/CDMX009-BurgerQueen/#/)

Usuario: pruebin@yopmail.com
Contraseña: burger01

## Objetivos de aprendizaje

### HTML y CSS
- [ D ] [ N ]
- [ ✅ ] [ ✅ ]  HTML semántico
- [ ✅ ] [ ✅ ] CSS flexbox
- [ ✅ ] [ ✅ ] Bootstrap
- [ ✅ ] [ ✅ ] Maquetación

### Frontend Development

- [ ✅ ] [ ✅ ] Componentes
- [ ✅ ] [ ✅ ] Manejo del estado

### PWA

- [ ] Concepto
- [ ] Utilidad
- [ ] Que es [Workbox](https://developers.google.com/web/tools/workbox)
- [ ] Qué es un `serviceWorker`

### React

- [ ✅ ] [ ✅ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
- [ ✅ ] [ ✅ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
- [ ✅ ] [ ✅ ] `props`
- [ ✅ ] [ ✅ ] [Manejo de eventos](https://es.reactjs.org/docs/handling-events.html)
- [ ✅ ] [ ✅ ]  [Listas y keys](https://es.reactjs.org/docs/lists-and-keys.html)
- [ ✅ ] [ ✅ ]  [Renderizado condicional](https://es.reactjs.org/docs/conditional-rendering.html)
- [ ✅ ] [ ✅ ]  [Levantamiento de estados](https://es.reactjs.org/docs/lifting-state-up.html)
- [ ✅ ] [ ✅ ]  [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
- [ ✅ ] [ ✅ ]  [`CSS` modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
- [ ✅ ] [ ✅ ]  [React Router](https://reacttraining.com/react-router/web)

### Firebase

- [ ✅ ] [ ✅ ]  Firestore
- [ ✅ ] [ ✅ ]  Firebase security rules
- [ ✅ ] [ ✅ ] Observables

### Testing

- [ ✅ ] [ ✅ ] Testeo de tus interfaces
- [ ✅ ] [ ✅ ] Testeo de componentes
- [ ] Testeo asíncrono
- [ ] Mocking

### Colaboración en Github

- [ ✅ ] [ ✅ ] Branches
- [ ✅ ] [ ✅ ] Pull Requests
- [ ] Tags

### Organización en Github

- [ ✅ ] [ ✅ ] Projects
- [ ] Issues
- [ ] Labels
- [ ] Milestones

### Buenas prácticas de desarrollo

- [ ✅ ] [ ✅ ] Modularización
- [ ✅ ] [ ✅ ] Nomenclatura / Semántica
- [ ] Linting

---

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina (guardar en alguna base de datos).
- Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

- Ver los pedidos ordenados según se van haciendo.
- Marcar los pedidos que se han preparado y están listos para servirse.
- Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

- Ver listado de pedido listos para servir.
- Marcar pedidos que han sido entregados.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).
- Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

