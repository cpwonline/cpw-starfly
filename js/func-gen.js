//Función general - General function
	//Elementos - Elements
		obActual_starFly = new Array();
		cont_starFly = 0;
		estoy_starFly = 0;
	//Estilos generales - General styles
		//Comprobamos si están definidos - We verify if they're defined
			if(typeof estiloContenedor == "undefined"){
				estiloContenedor = "background:hsla(0, 0%, 30%, .9);padding:.2cm;margin-bottom:.1cm;overflow:hidden;text-align:right;border-radius:.1cm;-webkit-border-radius:.1cm;-moz-border-radius:.1cm;-o-border-radius:.1cm;transition:.3s all;-webkit-transition:.3s all;-moz-transition:.3s all;-o-transition:.3s all;";
			}
			if(typeof estiloIcono == "undefined")
				estiloIcono = "width:16px;height:16px;display:inline-block;";
			if(typeof estiloTitulo == "undefined")
				estiloTitulo = "display:inline-block;font-size:12pt;color:#CCC;margin-bottom:.1cm;padding:.25cm;";
			if(typeof estiloCerrar == "undefined")
				estiloCerrar = "cursor:pointer;display:inline-block;float:right;padding:.4cm;color:#fff;text-align:center;width:10%;";
			if(typeof estiloMensaje == "undefined")
				estiloMensaje = "font-size:10pt;color:#FFF;";
			if(typeof estiloBoton == "undefined")
				estiloBoton = "padding:.3cm;color:#fff;background:#777;text-decoration:none;";
			if(typeof textoBotonGen == "undefined")
				textoBotonGen = "Ok";

function starFly(t, m, cierre, duracion, icono){
	//Padre - Father
		padre = document.getElementById("starFly");
	//Funciones principales - Main functions
		//Función para borrar la notificación del documento - Function to delete the document notification
			this.borrarElemento_2_starFly = function(){
				if(obActual_starFly[estoy_starFly].parentNode == null){
					estoy_starFly++;
				}else{
					var ob = obActual_starFly[estoy_starFly].parentNode;
					if(typeof (ob.childNodes)[0] == "undefined"){
						estoy_starFly++;
					}else{
						padre.removeChild(obActual_starFly[estoy_starFly]);
						estoy_starFly++;
					}
				}
				this.ocultarPanel_starFly();
			}
		//Función para borrar la notificación del documento - Function to delete the document notification
			this.borrarElemento_starFly = function(elemento, nivel, tipo){
				switch(tipo){
					case 'inst':
						switch(nivel){
							case 0:
								padre.removeChild(elemento.parentNode);
								break;
							case 1:
								padre.removeChild(elemento);
								break;
						}
						break;
					case 'xT':
						obActual_starFly[cont_starFly] = elemento;
						cont_starFly++;
						setTimeout(borrarElemento_2_starFly, 3000);
						break;
				}
			}
		//Función para ocultar el panel si no hay notificaciones - Function to hide the panel if there are no notifications
			this.ocultarPanel_starFly = function(){
				var c = padre.getElementsByTagName('article');
				if(c.length < 1){
					padre.style.display = "none";
					obActual_starFly = [];
					cont_starFly = 0;
					estoy_starFly = 0;
				}
			}
		//Función que se llama cuando la notifcación es tipo 1 o 2 - Function that is called when the notification is type 1 or 2
			this.esperaAuto_starFly = function(tipo, duracion){
				switch(tipo){
					case 'xT':
						borrarElemento_starFly(cajaContenedor, 0, 'xT');
						break;
					default:
						borrarElemento_starFly(cajaContenedor, 1, 'inst');
						break;
				}
			}
		//Función para modificar el mensaje - Function to modify the message
			this.nuevoMsj_starFly = function(mensaje, ob){
				var p = ob.getElementsByTagName("p");
				p[0].innerHTML = mensaje;
			}

	//Creamos las cajas principales - We create the main boxes
		//Creamos las cajas - We create the boxes
			var cajaContenedor = document.createElement('article');
			var cajaIzq = document.createElement('div');
			var cajaDer = document.createElement('div');
			var cajaIcono = document.createElement('i');
			var cajaTitulo = document.createElement('h2');
			var cajaCerrar = document.createElement('div');
			var cajaMensaje = document.createElement('p');
			var cajaBoton = document.createElement('button');
		//Añadimos estilos - We add the styles
			cajaContenedor.setAttribute("style", estiloContenedor);
			cajaDer.setAttribute("style", "width:78%;display:inline-block;overflow:hidden;float:rigth;");
			cajaIzq.setAttribute("style", "width:18%;display:inline-block;text-align:left;overflow:hidden;float:left;");
			//Añadimos los estilos de iconos - We add the icons styles
				var es = "";
				switch(icono){
					case "good":
						es = estiloIcono + "background:url('starfly/images/16x16_blanco/acercade.png')no-repeat center;";
						break;
					case "settings":
						es = estiloIcono + "background:url('starfly/images/16x16_blanco/ajustes.png')no-repeat center;";
						break;
					case "question":
						es = estiloIcono + "background:url('starfly/images/16x16_blanco/ayuda.png')no-repeat center;";
						break;
					case "delete":
						es = estiloIcono + "background:url('starfly/images/16x16_blanco/borrar.png')no-repeat center;";
						break;
					case "cancel":
						es = estiloIcono + "background:url('starfly/images/16x16_blanco/cancelar.png')no-repeat center;";
						break;
					case "information":
						es = estiloIcono + "background:url('starfly/images/16x16_blanco/informaciones.png')no-repeat center;";
						break;
					case "security":
						es = estiloIcono + "background:url('starfly/images/16x16_blanco/seguridad.png')no-repeat center;";
						break;
					default:
						es = estiloIcono + "background:url('starfly/images/16x16_blanco/informaciones.png')no-repeat center;";
						break;
				}
			cajaIcono.setAttribute("style", es);
			cajaTitulo.setAttribute("style", estiloTitulo);
			cajaCerrar.setAttribute("style", estiloCerrar);
			cajaMensaje.setAttribute("style", estiloMensaje);
			cajaBoton.setAttribute("class", estiloBoton);
		//Añadimos contenido dinámico - We add dynamic content
			cajaBoton.setAttribute("onclick", "borrarElemento_starFly(this, 0, 'inst');");
			cajaCerrar.setAttribute("onmouseover", "this.style.background = '#777';");
			cajaCerrar.setAttribute("onmouseout", "this.style.background = 'none';");
			cajaCerrar.setAttribute("onclick", "((this.parentNode).parentNode).parentNode.removeChild((this.parentNode).parentNode);");
	//Creamos el contenido - We create the content
		var textoTitulo = document.createTextNode(t);
		var textoCerrar = document.createTextNode("x");
		var textoIcono = document.createTextNode('');
		var textoMensaje = document.createTextNode(m);
		var textoBoton = document.createTextNode(textoBotonGen);
	//Asignamos valores - We assign values
		cajaIcono.appendChild(textoIcono);
		cajaTitulo.appendChild(textoTitulo);
		cajaCerrar.appendChild(textoCerrar);
		cajaMensaje.appendChild(textoMensaje);
		cajaBoton.appendChild(textoBoton);
	//Asignamos las cajas a la caja izquierda y derecha - We assign the boxes to the left and right boxes
		cajaIzq.appendChild(cajaIcono);
		cajaDer.appendChild(cajaTitulo);
		cajaDer.appendChild(cajaCerrar);
	//Asignamos las cajas a la caja principal - We assign the boxes to the main box
		cajaContenedor.appendChild(cajaIzq);
		cajaContenedor.appendChild(cajaDer);
		cajaContenedor.appendChild(cajaMensaje);
		if(cierre == 0)
			cajaContenedor.appendChild(cajaBoton);
	//Buscamos el último elemento como referencia - We look for the last element as a reference
		var cajaUltima = padre.lastChild;
	//Añadimos la notificación a StarFly - We add the notification to StarFly
		padre.insertBefore(cajaContenedor, cajaUltima);
	//Mostramos el panel - We show the panel
		padre.style.display = "block";
	//Si es automático el cierre - If the closing is automatic
		if(cierre == 1)
			setTimeout(esperaAuto_starFly, duracion);
	//Retornamos la notificación si alguien desea almacenar su dirección en una variable - 
	//We return the notification if someone wants to store their address in a variable
		return cajaContenedor;
}