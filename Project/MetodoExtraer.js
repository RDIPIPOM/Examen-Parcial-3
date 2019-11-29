function extraer() {
    //Consideré una lista doblemente enlazada (no circular)
    let aux = this._inicio;
    if (this._inicio.prioridad != 1) {
        while (aux != null && aux.prioridad === 0)
            aux = aux.siguiente;

        if (aux != null) {
            aux.anterior.siguiente = aux.siguiente;
            if (aux.siguiente != null)
                aux.siguiente.anterior = aux.anterior;
            return aux;
        } else {
            aux = this._inicio;
            this._inicio.siguiente.anterior = null;
            this._inicio = this._inicio.siguiente;
            return aux;
        }
    } else {
        aux = this._inicio;
        this._inicio.siguiente.anterior = null;
        this._inicio = this._inicio.siguiente;
        return aux;
    }
}