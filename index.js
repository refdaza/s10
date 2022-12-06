class Alumno {
    codigo = "";
    nombre = "";
    nota1 = "";
    nota2 = "";
    nota3 = "";
    nota4 = "";
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo
        this.nombre = nombre
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4
    }
    promedio(){
       return this.nota1*15/100 + this.nota2*20/100 + this.nota3*25/100 + this.nota4*40/100
    }
    condicion(){
        if (this.promedio()>= 12) {
            return "está aprobado"
        }else {
            return "está desaprobado"
        }
    }
    obsequio(){
        if (this.promedio()>17) {
            return "recibirá su mochila como obsequio"
        } else {
            return 'No recibirá ningún obsequio'
        }
    }

}
const alumno1 = new Alumno(01, 'Refaim', 18, 18, 20, 20)
console.log(`El alumno ${alumno1.nombre} tiene de promedio ${alumno1.promedio()} ${alumno1.condicion()} y ${alumno1.obsequio()} `);