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
	 * busca Ajustara la configuración del buscador
	 * @param  {String} cBuscador será el nombre del input que le traera los parametros
	 * @return {[type]}           [description]
	 */
	this.busca = function(cBuscador = "")
	{
		var cBusqueda = document.querySelector(`input[name='${cBuscador}'`);
		cBusqueda.onkeyup = this.realizaBusqueda;
	}
	/**
	 * realizaBusqueda 
	 * @param  {[type]} keyPress [description]
	 * @return {[type]}          [description]
	 */
	this.realizaBusqueda = function(keyPress = null)
	{
		var cDataBusqueda = this.value;	
		console.log(aParametros)
	}
	/**
	 * parametro Guardara los parametros en los que tengamos que buscar
	 * @param  {String} cParametro Será el parametro en el que tengamos que buscar
	 */
	this.parametro = function(cParametro = "")
	{
		aParametros.push(cParametro);
	}
}
prueba = new buscadorIncremental();
prueba.parametro("data-search");
prueba.parametro("data-hi");
prueba.busca('busquedaimplacable');