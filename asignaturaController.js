var config = require('./dbconfig');
const sql = require('mssql');
const { asignatura,estudiante,docente,record} = require('./modelos');

async function seleccionar() {
    try {
        let pool = await sql.connect(config);
        let materia = await pool.request()
        .execute("SP_S_ASIGNATURAS");
        return materia.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function seleccionarId(ID) {
    try {
        let pool = await sql.connect(config);        
        let materia = await pool.request()
          
        .input('ID', sql.Int,ID)
          
        .execute("SP_SXID_ASIGNATURAS");
        return materia.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function crear(asignatura) {
    try {
        let pool = await sql.connect(config);
        let crearAsignatura = await pool.request()
          
        .input('CODIGO', sql.NVarChar,asignatura.CODIGO)
        .input('NOMBRE', sql.NVarChar, asignatura.NOMBRE)
        .input('CREDITOS', sql.Int,asignatura.CREDITOS)
          
        .execute('SP_I_ASIGNATURA');
        return crearAsignatura.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//update
async function editar(asignatura) {
    try {
        let pool = await sql.connect(config);
        let editarAsignatura = await pool.request()

        .input('ID', sql.Int,asignatura.ID)
        .input('CODIGO', sql.NVarChar,asignatura.CODIGO)
        .input('NOMBRE', sql.NVarChar, asignatura.NOMBRE)
        .input('CREDITOS', sql.Int,asignatura.CREDITOS)
      
        .execute('SP_U_ASIGNATURAS');
         return editarAsignatura.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Eliminar

async function deleteId(id) {
    try {
        let pool = await sql.connect(config);
        let eliminarAsignatura = await pool.request()
        .input('ID', sql.Int,id)
        .execute('SP_D_ASIGNATURAS')
         return eliminarAsignatura.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {seleccionar: seleccionar,seleccionarId: seleccionarId,crear:crear,
    editar : editar,deleteId: deleteId};