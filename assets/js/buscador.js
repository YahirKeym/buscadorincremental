/**
 * buscadorIncremental Hará la busqueda de elementos que le digamos, con los parametros y nodos que indiquemos
 * @author Yahir Axel Garcia Keymurth 20-Jun-2019
 */
function buscadorIncremental(cFirtsClass = "",cSecondClass ="") {
    /**
     * _self Guardara el objeto de forma global
     * @type {object}
     */
    _self = this;
    /**
     * cFirtsClass Será la clase que se afectuara a los campos seleccionados
     * @type {String}
     */
    cFirtsClass = cFirtsClass
    /**
     * cSecondClass Será la clase que se afectuara cuando los campos nos sean seleccionados
     * @type {String}
     */
    cSecondClass = cSecondClass
    /**
     * aParametros Guardara los parametros de busqueda
     * @type {Array}
     */
    aParametros = {};
    /**
     * iElemento Nos dirá en que elemento nos encotramos, empezando por 0
     * @type {Number}
     */
    iElemento = -1;
    /**
     * iBloquea description]
     * @type {Number}
     */
    iBloquea = 0;
    /**
     * forEach Será la función forEach para hacer la repetición de elementos
     * @type {Function}
     */
    forEach = Array.prototype.forEach;
    /**
     * cBusqueda Será el elemento en este caso input donde se escribirá la busqueda
     * @type {String}
     */
    cBusqueda = "";
    /**
     * cCampoValor Serán los elementos en donde se hará la busqueda
     * @type {String}
     */
    cCampoValor = "";
    /**
     * cValorLimpio Será los elementos sin Acentos
     * @type {String}
     */
    cValorLimpio = "";
    /**
     * busca Ajustara la configuración del buscador
     * @param  {String} cBuscador será el nombre del input que le traera los parametros
     */
    this.busca = function(cBuscador = "", cParametro = "") {
        aParametros['parametro'] = cParametro;
        cBusqueda = document.querySelector(`input[name='${cBuscador}'`);
        cCampoValor = document.querySelectorAll(`[${aParametros['parametro']}]`);
        cBusqueda.addEventListener("keyup", this.keysUp);
    }
    /**
     * keysUp Serán las acciones después de pulsar x tecla en el input
     */
    this.keysUp = function() {
        var cValor = this.value;
        cValorLimpio = _self.quitaAcentos(cValor);
        iBloquea = 0;
        iElemento++;
        forEach.call(cCampoValor, _self.muestraBuqueda);
    }
    /**
     * muestraBuqueda Ayudara a ocultar y mostrar los elementos mediante la busqueda
     * @param  {elementos} elements      Son los elementos que se encuentrar mediante la iteración
     * @param  {number} iCountElement Es el valor númerico del elemento
     */
    this.muestraBuqueda = function(elements, iCountElement) {
        var cValorSearch = elements.getAttribute(aParametros['parametro'])
        var hiddenElement = document.querySelector(`[${aParametros['parametro']}='${cValorSearch}']`)
        if (_self.quitaAcentos(elements.innerHTML.toLowerCase()).search(cValorLimpio.toLowerCase()) == -1) {
            hiddenElement.classList.remove(cFirtsClass);
            hiddenElement.classList.add(cSecondClass);
        } else {
            hiddenElement.classList.remove(cSecondClass);
            hiddenElement.classList.add(cFirtsClass);
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