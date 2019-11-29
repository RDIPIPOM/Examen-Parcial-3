function extraer() {
    //Consideré una lista doblemente enlazada (no circular)
    let aux = this._inicio;
    while (aux != null && aux.prioridad === 0)
        aux = aux.siguiente;

    if (this._inicio.prioridad === 1 || aux === null) {
        aux = this._inicio;
        this._inicio.siguiente.anterior = null;
        this._inicio = this._inicio.siguiente;
        return aux;
    } else {
        aux.anterior.siguiente = aux.siguiente;
        if (aux.siguiente != null)
            aux.siguiente.anterior = aux.anterior;
        return aux;
    }
}