StarFly - README
================

### Contents
* [Installation](#installation)
* [Usage](#usage)
* [Updates](#updates)
* [License](#license)

Introducción
------------

Desarrollado, diseñado y creado por el Equipo de Desarrolladores Web de CPW Online | https://github.com/cpwonline/

¡Hola! Gracias por utilizar este software, desarrollado con mucho esfuerzo y cariño para la comunidad del Software libre. 

Introduction
------------

Developed, designed and made by the Web Developers Team of CPW Online | https://github.com/cpwonline/

Hello! Thank you for using this software, developed with a lot of effort and affection for the Free Software community.

¿Qué es StarFly?
----------------

Es un administrador de notificaciones que funciona como complemento (o plugin) en un sitio web. 
No es necesario añadir algún plugin de jQuery, este software no lo utiliza. 

Este funciona como complemento de su sitio ya que le permitiría ocuparse en otros aspectos
de la web y no de estar ocupado programando anuncios que indican las notificaciones que usted quiere
mostrar, y que, en ocasiones el usuario nunca llega a ver.

What is StarFly?
----------------

It is a notification manager that works as a complement (or plugin) in a website.
It is not necessary to add any jQuery plugin, this software does not use it.

This works as a complement to your site because it would allow you to deal with other aspects
of the web and not to be busy scheduling ads that indicate the notifications you want
show, and that, sometimes the user never gets to see.

Características
---------------

*Rápido y confiable
*No necesita jQuery
*Trabaja con puro código JavaScript (soportado por la mayoría de navegadores actuales)
*Personalizable a su gusto

Features
--------------

* Fast and reliable
* Does not need jQuery
* Work with pure JavaScript code (supported by most current browsers)
* Customizable to your liking

Requerimientos
--------------

*Soporte para CSS y JavaScript

Requirements
------------

Support for CSS and JavaScript

Instalación
-----------

Pasos para instalar StarFly:

1. Descargar o clonar el repositorio de https://github.com/cpwonline/starfly.git

2. Ahora debe copiar el directorio (si lo descargó debe descomprimirlo primero) en el directorio
donde se encuentra su sitio web local (O remoto)

3. En el archivo principal de su sitio web (sea index, index.html o index.php), usted deberá
tener anexado el archivo de su main.js y los archivos de la carpeta starfly, agregue
las siguientes líneas de código en su <head>:
	
  ```HTML
	<!--Archivos principales de StarFly-->
		<link rel="stylesheet" href="starfly/css/estilo-gen.css"/>
		<script src="starfly/js/func-gen.js"/></script>
	<!--Fin Archivos principales de StarFly-->
  ```
Instalation
-----------

Steps to install StarFly:

1. Download or clone the repository of https://github.com/cpwonline/starfly.git

2. Now you must copy the directory (if you downloaded it you must unzip it first) in the directory
where is your local website (or remote)

3. In the main file of your website (be it index, index.html or index.php), you must
have attached the file of your main.js and the files of the folder starfly, add
The following lines of code in your <head>:

	<!--StarFly main files-->
		<link rel="stylesheet" href="starfly/css/estilo-gen.css"/>
		<script src="starfly/js/func-gen.js"/></script>
	<!--End StarFly main files-->

Cómo usar StarFly
-----------------

Es fácil, hay tres tipos de notificaciones:

1. Not. que desaparece al presionar 'Ok'

Para mostrar esta notificación, añada las siguientes líneas de código a su main.js:

//Inicio de código
	//Datos
		var titulo = "Alerta"
		var mensaje = "Usted ha ingresado una clave incorrecta."
	//Notificación
		starFly(titulo, mensaje, 0, 0, "question");
//Fin de código

2. Not. que desaparece automáticamente en determinados segundos

Para mostrar esta notificación, añada las siguientes líneas de código a su main.js:

//Inicio de código
	//Datos
		var titulo = "Alerta"
		var mensaje = "Usted ha ingresado una clave incorrecta."
	//Notificación
		starFly(titulo, mensaje, 1, 5000, "security");
//Fin de código

*Nota: En el código anterior la notificación desaparecerá al cumplirse 5 segundos (5000 milisegundos).

3. Not. que desaparece sólo con código

Para mostrar esta notificación, añada las siguientes líneas de código a su main.js:

//Inicio de código
	//Datos
		var titulo = "Alerta"
		var mensaje = "Usted ha ingresado una clave incorrecta."
	//Notificación
		//Se crea
			ob_sF = starFly(titulo, mensaje, 2, 0, "question");
		//Se borra
			borrarElemento_starFly(ob_sF, 1, 'xT');
//Fin de código

* Extra. También puede editar el mensaje (Solo para la notificación que desaparece con código)

Para mostrar esta notificación, añada las siguientes líneas de código a su main.js:

//Inicio de código
	//Datos
		var titulo = "Alerta"
		var mensaje = "Usted ha ingresado una clave incorrecta."
	//Notificación
		//Se crea
			ob_sF = starFly(titulo, mensaje, 2, 5000, "question");
		//Editamos el mensaje
			nuevoMsj_starFly('Usted ha sido bloqueado', ob_sF);
		//Se borra
			borrarElemento_starFly(ob_sF, 1, 'xT');
//Fin de código

* Extra. Algunos iconos disponibles para su notificación:

1. good: Icono que indica una afirmación o que algo se realizó correctamente.

2. settings: Icono que indica que se ha realizado un ajuste

3. question: Icono que indica que ha sucedido un error desconocido

4. delete: Icono que indica que se ha eliminado algo

5. cancel: Icono que indica que ha sucedido un error en específico

6. information: Icono que indica que lo que se muestra es informativo

7. security: Icono que indica que lo que se muestra es privado, información importante o restringida

* Extra. Si usted tiene un archivo .js (código fuente de JavaScript) usted puede editar ese archivo y
agregar las siguientes líneas de código (Desde "Inicio copiado" hasta "Fin copiado", nada más) para cambiar el
diseño de StarFly:

//Inicio copiado
//Variables generales de StarFly
	//De estilo
		estiloContenedor = "background:hsla(0, 0%, 30%, .9);padding:.2cm;margin-bottom:.1cm;overflow:hidden;text-align:right;border-radius:.1cm;-webkit-border-radius:.1cm;-moz-border-radius:.1cm;-o-border-radius:.1cm;transition:.3s all;-webkit-transition:.3s all;-moz-transition:.3s all;-o-transition:.3s all;";
		estiloIcono = "width:16px;height:16px;display:inline-block;";
		estiloTitulo = "display:inline-block;font-size:12pt;color:#CCC;margin-bottom:.1cm;padding:.25cm;";
		estiloCerrar = "cursor:pointer;display:inline-block;float:right;padding:.4cm;color:#fff;text-align:center;width:10%;";
		estiloMensaje = "font-size:10pt;color:#FFF;";
		estiloBoton = "btn-gen";//Debes elegir una clase de estilo
//De personalización
		textoBotonGen = "Ok";
//Fin variables generales de StarFly
//Fin copiado

Si usted no tiene algún archivo .js, deberá crear un archivo llamado "main.js" (Puede ser
el nombre que usted desee) y agregar las líneas de código anteriores.


How to use StarFly
------------------

It's easy, there are three types of notifications:

1. Not. that disappears when pressing 'Ok'

To display this notification, add the following lines of code to your main.js:

//Start code
	//Data
		var title = "Alert"
		var message = "You have entered an incorrect password."
	//Notification
		starFly(title, message, 0, 0, "security");
//End code

2. Not. that disappears automatically in certain seconds

To display this notification, add the following lines of code to your main.js:

//Start code
	//Data
		var title = "Alert"
		var message = "You have entered an incorrect password."
	//Notification
		starFly(title, message, 1, 5000, "security");
//End code

*Note: In the previous code the notification will disappear after 5 seconds (5000 milliseconds).

3. Not. that disappears only with code

To display this notification, add the following lines of code to your main.js:

//Start code
	//Data
		var title = "Alert"
		var message = "You have entered an incorrect password."
	//Notification
		//It's created
			ob_sF = starFly(title, message, 2, 0, "question");
		//It's erased
			borrarElemento_starFly(ob_sF, 1, 'xT');
//End code

* Extra. You can also edit the message (Only for notification that disappears with code)

To display this notification, add the following lines of code to your main.js:

//Start code
	//Data
		var title = "Alert"
		var message = "You have entered an incorrect password."
	//Notification
		//It's created
			ob_sF = starFly(title, message, 2, 5000, "question");
		//We edit the message
			nuevoMsj_starFly('You have been blocked', ob_sF);
		//It's erased
			borrarElemento_starFly(ob_sF, 1, 'xT');
//End code

* Extra. Some icons available for notification:

1. good: Icon that indicates an affirmation or that something was done correctly.

2. settings: Icon that indicates that an adjustment has been made

3. question: Icon indicating that an unknown error has occurred

4. delete: Icon that indicates that something has been deleted

5. cancel: Icon indicating that a specific error has occurred

6. information: Icon that indicates that what is shown is informative

7. security: Icon that indicates that what is shown is private, important or restricted information

Extra. If you have a .js file (JavaScript source code) you can edit that file and
add the following lines of code (From "Start copied" to "End copied", nothing else) to change the StarFly design:

// Start copied
// StarFly general variables
	// Of style
		estiloContenedor = "background:hsla(0, 0%, 30%, .9);padding:.2cm;margin-bottom:.1cm;overflow:hidden;text-align:right;border-radius:.1cm;-webkit-border-radius:.1cm;-moz-border-radius:.1cm;-o-border-radius:.1cm;transition:.3s all;-webkit-transition:.3s all;-moz-transition:.3s all;-o-transition:.3s all;";
		estiloIcono = "width:16px;height:16px;display:inline-block;";
		estiloTitulo = "display:inline-block;font-size:12pt;color:#CCC;margin-bottom:.1cm;padding:.25cm;";
		estiloCerrar = "cursor:pointer;display:inline-block;float:right;padding:.4cm;color:#fff;text-align:center;width:10%;";
		estiloMensaje = "font-size:10pt;color:#FFF;";
		estiloBoton = "Your-style";//You must choose a style class
	//Of personalization
		textoBotonGen = "Ok";
// End StarFly general variables
// End copied

If you do not have any .js file, you should create a file called "main.js" (It can be
the name you want) and add the previous lines of code.


Documentación
-------------

Por los momentos no contamos con documentación en línea, ¡pero trabajamos en ello!

Documentation
-------------

At the moment we do not have online documentation, but we work on it!

Donaciones
----------

Si usted quiere ayudarnos financieramente nosotros aceptamos sus donaciones usando 
Paypal y realizando los siguientes pasos: 

1. Acceda desde su navegador a la siguiente URL: paypal.me/cpwonline

2. Déjese llevar ;)

Donations
----------

If you want to help us financially we accept your donations using
Paypal and performing the following steps:

1. Access the following URL from your browser: paypal.me/cpwonline

2. Let yourself go ;)

Contacto
--------

Si usted desea ponerse en contacto con nosotros es sencillo:

*GitHub: [cpwonline](https://www.github.com/cpwonline/starfly.git)
*Web: [cpwonline](https://www.cpwonline.com.ve/contacto)
*Email: [cpwonline](support@cpwonline.com.ve)
*Facebook: [@CPWOnline](https://facebook.com/CPWOnline)
*Instagram: [@cpwonline](https://instagram.com/cpwonline)

Contact
-------

If you wish to contact us, it is simple:

*GitHub: [cpwonline](https://www.github.com/cpwonline/starfly.git)
* Web: [cpwonline] (https://www.cpwonline.com.ve/contacto)
* Email: [cpwonline] (support@cpwonline.com.ve)
* Facebook: [@CPWOnline] (https://facebook.com/CPWOnline)
* Instagram: [@cpwonline] (https://instagram.com/cpwonline)