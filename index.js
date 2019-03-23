const {obtenePromedio, argv} = require('./datos.js')
const express=require('express')
const app=express()

console.log(argv);
if (argv._[0]=='promedio'){
	let texto=('El promedio de ' + argv.n + ' es ' )
}else{
	console.log('promedio no calculado');
}