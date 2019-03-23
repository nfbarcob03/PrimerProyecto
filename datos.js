const opciones={
		nombre:{
			demand:true,
			alias:'n'
		},
		matematicas:{
			default:0,
			alias:'m'
		},
		ingles:{
			default:0,
			alias:'i'
		},
		programacion:{
			default:0,
			alias:'p'
		}
}

let obtenerPromedio=(nota_uno,nota_dos,nota_tres)=>((nota_uno+nota_dos+nota_tres)/3)

const argv = require('yargs')
				.command('inscribir','Se realiza la inscripción al curso', datos_necesarios)
				.argv
module.exports={
	estudiante,
	obtenerPromedio
};