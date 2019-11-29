function extraer() {
    let aux = this._inicio;
    while (aux != null && aux.prioridad === 0) {
        aux = aux.siguiente;
    }

    if (aux != null) {
        aux.anterior.siguiente = aux.siguiente;
        aux.siguiente.anterior = aux.anterior;
        return aux;
    } else {
        let valorARetornar = this._inicio;
        this._inicio.siguiente.anterior = null;
        this._inicio = this._inicio.siguiente;
        return valorARetornar;
    }
}