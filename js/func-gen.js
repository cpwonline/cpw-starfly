//Variables generales
	//De estilo
		estiloContenedor = "background:hsla(0, 0%, 20%, .9);padding:.2cm;margin-bottom:.1cm;overflow:hidden;text-align:right;border-radius:.1cm;-webkit-border-radius:.1cm;-moz-border-radius:.1cm;-o-border-radius:.1cm;transition:.3s all;-webkit-transition:.3s all;-moz-transition:.3s all;-o-transition:.3s all;";
		estiloTitulo = "font-size:16pt;color:#CCC;margin-bottom:.1cm;";
		estiloMensaje = "font-size:12pt;color:#FFF;";
		estiloBoton = "btn-gen";
	//De personalización
		textoBotonGen = "Ok";
//Fin variables generales

//Función general

function starFly(t, m, cierre){
	//Padre
		padre = document.getElementById("starFly");
	//Funciones principales
		this.borrarElemento = function(elemento){
			padre.removeChild(elemento.parentNode);
			this.ocultarPanel();
		}
		this.ocultarPanel = function(){
			var c = padre.getElementsByTagName('article');
			if(c.length < 1)
				padre.style.display = "none";
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
			cajaBoton.setAttribute("onClick", "borrarElemento(this);");
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
	//Buscamos el elemento posterior
		var cajaPosterior = padre.querySelector('.pie');
	//Añadimos la notificación a starFly
		padre.insertBefore(cajaContenedor, cajaPosterior);
	//Mostramos el panel
		padre.style.display = "block";
		return cajaContenedor;
}