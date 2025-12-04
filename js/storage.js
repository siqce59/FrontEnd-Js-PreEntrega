const KEY = "carrito";

export const guardarCarrito = (carrito) => {
 //  Esto es porque localStorage solo guarda strings, se usa stringify para convertir objetos a strings
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  // al reves que lo anterior, convertimos a js    con parse
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};
