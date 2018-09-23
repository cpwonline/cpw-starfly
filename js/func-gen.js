//Variables generales
	//De estilo
		estiloContenedor = "background:hsla(0, 0%, 30%, .9);padding:.2cm;margin-bottom:.1cm;overflow:hidden;text-align:right;border-radius:.1cm;-webkit-border-radius:.1cm;-moz-border-radius:.1cm;-o-border-radius:.1cm;transition:.3s all;-webkit-transition:.3s all;-moz-transition:.3s all;-o-transition:.3s all;";
		estiloTitulo = "font-size:12pt;color:#CCC;margin-bottom:.1cm;";
		estiloMensaje = "font-size:10pt;color:#FFF;";
		estiloBoton = "btn-gen";//Debes elegir una clase 
	//De personalización
		textoBotonGen = "Ok";
//Fin variables generales

//Función general

function starFly(t, m, cierre, duracion){
	//Padre
		padre = document.getElementById("starFly");
	//Funciones principales
		//Función para borrar la notificación del documento
			this.borrarElemento_starFly = function(elemento, nivel){
				switch(nivel){
					case 0:
						padre.removeChild(elemento);
						break;
					case 1:
						padre.removeChild(elemento.parentNode);
						break;
				}
				this.ocultarPanel_starFly();
			}
		//Función para ocultar el panel si no hay notificaciones
			this.ocultarPanel_starFly = function(){
				var c = padre.getElementsByTagName('article');
				if(c.length < 1)
					padre.style.display = "none";
			}
		this.esperaAuto_starFly = function(){
			borrarElemento_starFly(cajaContenedor, 0);
		}
		
	//Creamos las cajas principales
		//Creamos las cajas
			var cajaContenedor = document.createElement('article');
			var cajaTitulo = document.createElement('h2');
			var cajaMensaje = document.createElement('p');
			var cajaBoton = document.createElement('button');
		//Añadimos estilos
			cajaContenedor.setAttribute("style", estiloContenedor);
			cajaTitulo.setAttribute("style", estiloTitulo);
			cajaMensaje.setAttribute("style", estiloMensaje);
			cajaBoton.setAttribute("class", estiloBoton);
		//Añadimos contenido dinámico
			cajaBoton.setAttribute("onclick", "borrarElemento_starFly(this, 1);");
	//Creamos el contenido
		var textoTitulo = document.createTextNode(t);
		var textoMensaje = document.createTextNode(m);
		var textoBoton = document.createTextNode(textoBotonGen);
	//Asignamos valores
		cajaTitulo.appendChild(textoTitulo);
		cajaMensaje.appendChild(textoMensaje);
		cajaBoton.appendChild(textoBoton);
	//Asignamos valores a la caja principal
		cajaContenedor.appendChild(cajaTitulo);
		cajaContenedor.appendChild(cajaMensaje);
		if(cierre == 0)
			cajaContenedor.appendChild(cajaBoton);
	//Buscamos el último elemento como referencia
		var cajaUltima = padre.lastChild;
	//Añadimos la notificación a starFly
		padre.insertBefore(cajaContenedor, cajaUltima);
	//Mostramos el panel
		padre.style.display = "block";
	//Si es automático el cierre
		if(cierre == 1)
			setTimeout(esperaAuto_starFly, duracion);
	//Retornamos la notificación si alguien desea almacenar su dirección en una variable
		return cajaContenedor;
}

/*
	Ejemplo de uso (usando los 3 tipos de notificaciones):
		var titulo = "Titulo 1";var titulo2 = "Titulo 2";var titulo3 = "Titulo 3";
		var mensaje = "Mensaje 1";var mensaje2 = "Mensaje 2";var mensaje3 = "Mensaje 3";
		starFly(titulo, mensaje, 0, 3000);
		starFly(titulo2, mensaje2, 1, 4000);
		var ob = starFly(titulo3, mensaje3, 2, 5000);
		borrarElemento_starFly(ob, 0);
*/