//require para manejar archivos 
const fs= require('fs');
//Objeto retardo para que la funcion asincrona esperepara volverse a ejecutar
const delay = (amount = number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, amount);
    });
  }
//Opciones de cursos (un arreglo on objetos de cursos)
let cursos=[
		matematicas={
			id:100,
			nombre:'Matematicas Basicas',
			duracion:'64 Horas',
			valor:200,
			alias:'m'
		},
		ingles={
			id:200,
			nombre:'Ingles Basicas',
			duracion:'64 Horas',
			valor:200,
			alias:'i'
		},
		programacion={
			id:300,
			nombre:'Programacion Basicas',
			duracion:'64 Horas',
			valor:200,
			alias:'m'
		}]

//Datos necesarios para introducir por consola
const datos_necesarios={
		nombre:{
			demand:true,
			alias:'n'
		},
		cedula:{
			demand:true,
			alias:'x'
		},
		id:{
			demand:true,
			alias:'i'
		}
	}

//Crear el archivo para la inscripcion
let crearArchivo= (estudiante, cursos)=>{
	let estudianteCurso = cursos.find(function(curso){
		return curso.id == estudiante[2];
	})

	texto='El estudiante llamado '+ estudiante[0]+ 
			"  \ncon cedula numero"+ estudiante[1] +"  \nSe ha matriculado en el curso llamado" +
			"  \n ----"+ cursosToString(estudianteCurso);
	fs.writeFile("inscripcion.txt", texto, (err)=>{

		if (err) throw(err);
		console.log("se ha creado el archivo");
	});
}

//Sacar la descripcion de un curso para imprimir por pantalla
let cursosToString=(curso)=>{
		return 'Curso: '+ curso.nombre + '. id: '+ curso.id +'. Duración: '+ curso.duracion+ '. Valor: '+curso.valor+ ' mil pesos.';
}

//Funcion para mostrar cursos cada 2 seg
let mostrarCursos=(callback)=>{
	console.log("Bienvenido, aqui podras obtener la información de cursos ofertados por educación continua ");
	async function loop() {
		for (i=0; i<cursos.length;i++){
			await delay(2000);
			imprimir= cursosToString(cursos[i]);
			console.log(imprimir);
			callback(true);
		}
	}
	loop();
}
//Llamado por consola a la funcion inscribir y se le pasan los parametros
const argv = require('yargs')
				.command('inscribir','Se realiza la inscripción al curso', datos_necesarios)
				.argv

if(argv.i){
	id=argv.i;
	let idBuscado = cursos.find(function(curso){
		return curso.id ==id;
	})
	if(idBuscado){
		crearArchivo([argv.n, argv.x,argv.i], cursos);
	}
	else{
		//Cuando se inicia el programa
		console.log("El ID del curso no es valido.")
		mostrarCursos(function(callback){});
	}
}else{
	mostrarCursos(function(callback){});
}
