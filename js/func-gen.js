//Función general
	//Elementos
		obActual_starFly = new Array();
		cont_starFly = 0;
		estoy_starFly = 0;

function starFly(t, m, cierre, duracion, icono){
	//Padre
		padre = document.getElementById("starFly");
	//Funciones principales
		//Función para borrar la notificación del documento
			this.borrarElemento_2_starFly = function(){
				padre.removeChild(obActual_starFly[estoy_starFly]);
				estoy_starFly++;
			}
		//Función para borrar la notificación del documento
			this.borrarElemento_starFly = function(elemento, nivel, tipo){
				switch(tipo){
					case 'inst':
						switch(nivel){
							case 0://Desde el hijo (Botón o entre otros)
								padre.removeChild(elemento.parentNode);
								break;
							case 1://Desde el padre (Elemento o cuadro en sí)
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
				this.ocultarPanel_starFly();
			}
		//Función para ocultar el panel si no hay notificaciones
			this.ocultarPanel_starFly = function(){
				var c = padre.getElementsByTagName('article');
				if(c.length < 1)
					padre.style.display = "none";
			}
		//Función que se llama cuando la notifcación es tipo 1 o 2
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
		//Función para modificar el mensaje
			this.nuevoMsj_starFly = function(mensaje, ob){
				var p = ob.getElementsByTagName("p");
				p[0].innerHTML = mensaje;
			}

	//Creamos las cajas principales
		//Creamos las cajas
			var cajaContenedor = document.createElement('article');
			var cajaIzq = document.createElement('div');
			var cajaDer = document.createElement('div');
			var cajaIcono = document.createElement('i');
			var cajaTitulo = document.createElement('h2');
			var cajaMensaje = document.createElement('p');
			var cajaBoton = document.createElement('button');
		//Añadimos estilos
			cajaContenedor.setAttribute("style", estiloContenedor);
			cajaDer.setAttribute("style", "width:78%;display:inline-block;");
			cajaIzq.setAttribute("style", "width:18%;display:inline-block;text-align:left;");
			//Añadimos los estilos de iconos
				switch(icono){
					case "good":
						var es = estiloIcono + "background:url('starfly/images/16x16_blanco/acercade.png')no-repeat center;";
						break;
					case "settings":
						var es = estiloIcono + "background:url('starfly/images/16x16_blanco/ajustes.png')no-repeat center;";
						break;
					case "question":
						var es = estiloIcono + "background:url('starfly/images/16x16_blanco/ayuda.png')no-repeat center;";
						break;
					case "delete":
						var es = estiloIcono + "background:url('starfly/images/16x16_blanco/borrar.png')no-repeat center;";
						break;
					case "cancel":
						var es = estiloIcono + "background:url('starfly/images/16x16_blanco/cancelar.png')no-repeat center;";
						break;
					case "information":
						var es = estiloIcono + "background:url('starfly/images/16x16_blanco/informaciones.png')no-repeat center;";
						break;
					case "security":
						var es = estiloIcono + "background:url('starfly/images/16x16_blanco/seguridad.png')no-repeat center;";
						break;
					default:
						var es = estiloIcono + "background:url('starfly/images/16x16_blanco/informaciones.png')no-repeat center;";
						break;
				}
			cajaIcono.setAttribute("style", es);
			cajaTitulo.setAttribute("style", estiloTitulo);
			cajaMensaje.setAttribute("style", estiloMensaje);
			cajaBoton.setAttribute("class", estiloBoton);
		//Añadimos contenido dinámico
			cajaBoton.setAttribute("onclick", "borrarElemento_starFly(this, 0, 'inst');");
	//Creamos el contenido
		var textoTitulo = document.createTextNode(t);
		var textoIcono = document.createTextNode('');
		var textoMensaje = document.createTextNode(m);
		var textoBoton = document.createTextNode(textoBotonGen);
	//Asignamos valores
		cajaIcono.appendChild(textoIcono);
		cajaTitulo.appendChild(textoTitulo);
		cajaMensaje.appendChild(textoMensaje);
		cajaBoton.appendChild(textoBoton);
	//Asignamos las cajas a las caja izquierda y derecha
		cajaIzq.appendChild(cajaIcono);
		cajaDer.appendChild(cajaTitulo);
	//Asignamos las cajas a la caja principal
		cajaContenedor.appendChild(cajaIzq);
		cajaContenedor.appendChild(cajaDer);
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