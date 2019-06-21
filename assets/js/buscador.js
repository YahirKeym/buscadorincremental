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
     * aValores Guardara los valores de la busqueda en un array
     * @type {Array}
     */
    aValores = []
    /**
     * iElemento Nos dirá en que elemento nos encotramos, empezando por 0
     * @type {Number}
     */
    iElemento = -1;
    /**
     * [iBloquea description]
     * @type {Number}
     */
    iBloquea = 0;
    forEach = Array.prototype.forEach;
    cBusqueda = "";
    cCampoValor = "";
    cValorLimpio = "";
    /**
     * busca Ajustara la configuración del buscador
     * @param  {String} cBuscador será el nombre del input que le traera los parametros
     */
    this.busca = function(cBuscador = "", cParametro = "") {
        aParametros['parametro'] = cParametro;
        cBusqueda = document.querySelector(`input[name='${cBuscador}'`);
        cCampoValor = document.querySelectorAll(`[${aParametros['parametro']}]`);
        forEach = Array.prototype.forEach;
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
        // if(_self.keysPress(key,iBloquea,hiddenElement, iCountElement, cCampoValor))
        // {
        //     iBloquea++
        // }
    }
    /**
     * [keysPress description]
     * @param  {[type]} key              [description]
     * @param  {Number} iBloquea         [description]
     * @param  {String} elementoAtributo [description]
     * @param  {Number} iCountElement    [description]
     * @param  {String} cCampoValor      [description]
     * @return {[type]}                  [description]
     */
    this.keysPress = function(key = null, iBloquea = 0, elementoAtributo = "", iCountElement = 0, cCampoValor = "") {
        if (key.keyCode === 40 && iBloquea === 0) {
            var atributeStyle = elementoAtributo.getAttribute('class');
            var lRegreso = false;
            if (atributeStyle == "visible" && iCountElement == iElemento) {
                forEach.call(cCampoValor, function(element) {
                    element.classList.remove('verde')
                })
                elementoAtributo.classList.add("verde");
                console.log(elementoAtributo)
                lRegreso = true;
            }
            console.log(atributeStyle)
            console.log(iElemento)
            console.log(iCountElement)
            return lRegreso;
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
    /**
     * parametro Guardara los parametros en los que tengamos que buscar
     * @param  {String} cParametro Será el parametro en el que tengamos que buscar
     */
    this.parametro = function(cParametro = "") {
        
    }
}
prueba = new buscadorIncremental("visible","novisible");
prueba.busca('busquedaimplacable', "data-search");