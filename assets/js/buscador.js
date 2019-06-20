/**
 * buscadorIncremental Hará la busqueda de elementos que le digamos, con los parametros y nodos que indiquemos
 * @author Yahir Axel Garcia Keymurth 20-Jun-2019
 */
function buscadorIncremental()
{
	/**
	 * _self Guardara el objeto de forma global
	 * @type {object}
	 */
	_self = this;
	/**
	 * aParametros Guardara los parametros de busqueda
	 * @type {Array}
	 */
	aParametros = [];
	/**
	 * aValores Guardara los valores de la busqueda en un array
	 * @type {Array}
	 */
	aValores = []
	/**
	 * busca Ajustara la configuración del buscador
	 * @param  {String} cBuscador será el nombre del input que le traera los parametros
	 */
	this.busca = function(cBuscador = "")
	{
		var cBusqueda = document.querySelector(`input[name='${cBuscador}'`);
		var cCampoValor = document.querySelectorAll(`[data-search]`);
		aParametros.forEach(function(aData){
			$(`[${aData['parametro']}]`).each(function(iCount, cElement){
				var cValor = cElement.getAttribute(aData['parametro'])
				aValores.push(cValor);
			});
		});
		console.log(aValores)
		cBusqueda.onkeyup = this.realizaBusqueda;
	}
	/**
	 * realizaBusqueda 
	 * @param  {Object} keyPress Es el objeto que dice que tecla es la que fue presionada
	 */
	this.realizaBusqueda = function(keyPress = null)
	{
		var cDataBusqueda = this.value;	
		console.log(document.querySelector(`[data-search]`))
	}
	/**
	 * parametro Guardara los parametros en los que tengamos que buscar
	 * @param  {String} cParametro Será el parametro en el que tengamos que buscar
	 */
	this.parametro = function(cParametro = "", cNodo = "")
	{
		add = {
			'parametro' : cParametro,
			'nodo' : cNodo
		}
		aParametros.push(add);
	}
}
prueba = new buscadorIncremental();
prueba.parametro("data-search", 'li');
prueba.busca('busquedaimplacable');