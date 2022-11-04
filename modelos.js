class ASIGNATURA {
    constructor(ID, CODIGO, NOMBRE, CREDITOS){
        this.ID=ID,
        this.CODIGO=CODIGO,
        this.NOMBRE=NOMBRE ,
        this.CREDITOS=CREDITOS 
    }
}

class ESTUDIANTES {
    constructor(ID, CODIGO, NOMBRES, APELLIDOS, SEMESTRE, CARRERA, COD_ASIG){
        this.ID = ID,
        this.CODIGO = CODIGO,
        this.NOMBRES = NOMBRES,
        this.APELLIDOS = APELLIDOS,
        this.SEMESTRE = SEMESTRE,
        this.CARRERA = CARRERA,
        this.COD_ASIG = COD_ASIG
    }
}
class DOCENTES {
    constructor(ID, CODIGO, NOMBRES, APELLIDOS, COD_ASIG){
        this.ID = ID,
        this.CODIGO = CODIGO,
        this.NOMBRES = NOMBRES,
        this.APELLIDOS = APELLIDOS,
        this.COD_ASIG = COD_ASIG
    }
}
class RECORD {
    constructor(ID, CODIGO, FECHA_CREACION, PERIODO, NOTA1, NOTA2, PROMEDIO, ESTUDIANTE_COD, DOCENTE_COD){
        this.ID = ID,
        this.CODIGO = CODIGO,
        this.FECHA_CREACION = FECHA_CREACION,
        this.PERIODO = PERIODO,
        this.NOTA1 = NOTA1,
        this.NOTA2 = NOTA2,
        this.PROMEDIO = PROMEDIO,
        this.ESTUDIANTE_COD = ESTUDIANTE_COD,
        this.DOCENTE_COD = DOCENTE_COD
    }
}


module.exports = {ASIGNATURA,ESTUDIANTES,DOCENTES,RECORD};