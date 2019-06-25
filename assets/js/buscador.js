/**
 * buscadorIncremental Hará la busqueda de elementos que le digamos, con los parametros y nodos que indiquemos
 * @author Yahir Axel Garcia Keymurth 20-Jun-2019
 * @param  {String} cClaseBusquedaCorrecta   Es la clase que se usara para una busqueda correcta
 * @param  {String} cClaseBusquedaIncorrecta Es la clase que se usara para los elementos que no coincidan con la busqueda 
 */
function buscadorIncremental(cClaseBusquedaCorrecta = "",cClaseBusquedaIncorrecta ="") {
    /**
     * cClaseBusquedaCorrecta Será la clase que se afectuara a los campos seleccionados
     * @type {String}
     */
    this.cClaseBusquedaCorrecta = cClaseBusquedaCorrecta
    /**
     * cClaseBusquedaIncorrecta Será la clase que se afectuara cuando los campos nos sean seleccionados
     * @type {String}
     */
    this.cClaseBusquedaIncorrecta = cClaseBusquedaIncorrecta
    /**
     * aParametros Guardara los parametros de busqueda
     * @type {Array}
     */
    this.cParametro = "";
    /**
     * cBusqueda Será el elemento en este caso input donde se escribirá la busqueda
     * @type {String}
     */
    this.cBusqueda = "";
    /**
     * cCampoValor Serán los elementos en donde se hará la busqueda
     * @type {String}
     */
    this.cCampoValor = "";
    /**
     * cValorLimpio Será los elementos sin Acentos
     * @type {String}
     */
    this.cValorLimpio = "";
    /**
     *  busca Ajustara la configuración del buscador
     * @param  {string} nameInput             Es el nombre del input al que se le aplicara la busqueda
     * @param  {strign} nameParametroBusqueda Es el nombre de los lugares donde se buscara
     */
    this.busca = function(nameInput, nameParametroBusqueda) {
        this.cBusqueda = document.querySelector(`input[name='${nameInput}'`);
        this.cParametro = nameParametroBusqueda;
        this.cBusqueda.addEventListener("keyup", this.keysUp);
    }
    /**
     * keysUp Serán las acciones después de pulsar x tecla en el input
     */
    this.keysUp = (event) => {
        this.cCampoValor = document.querySelectorAll(`[search-name='${this.cParametro}'] > [data-search]`);
        var cValor = event.target.value;
        this.cValorLimpio = this.quitaAcentos(cValor);
        this.cCampoValor.forEach(this.muestraBuqueda);
    }
    /**
     * muestraBuqueda Ayudara a ocultar y mostrar los elementos mediante la busqueda
     * @param  {elementos} elements      Son los elementos que se encuentrar mediante la iteración
     * @param  {number} iCountElement Es el valor númerico del elemento
     */
    this.muestraBuqueda = (elements, iCountElement) => {
        var cValorSearch = elements.getAttribute('data-search')
        if (this.quitaAcentos(cValorSearch.toLowerCase()).search(this.cValorLimpio.toLowerCase()) == -1) {
            elements.classList.remove(cClaseBusquedaCorrecta);
            elements.classList.add(cClaseBusquedaIncorrecta);
        } else {
            elements.classList.remove(cClaseBusquedaIncorrecta);
            elements.classList.add(cClaseBusquedaCorrecta);
        }
    }
    /**
     * quitaAcentos Nos ayudara a quitar los acentos de la cadena para poder hacer la busqueda de manera correcta
     * @param  {String} cCadena Es la cadena que queremos limpiar de acentos
     * @return {String}         Regresa la cadena limpia de acentos
     */
    this.quitaAcentos = function(cCadena = "") {
        cCadena = cCadena.replace(/á/gi, "a");
        cCadena = cCadena.replace(/é/gi, "e");
        cCadena = cCadena.replace(/í/gi, "i");
        cCadena = cCadena.replace(/ó/gi, "o");
        cCadena = cCadena.replace(/ú/gi, "u");
        cCadena = cCadena.replace(/ñ/gi, "n");
        return cCadena;
    }
}