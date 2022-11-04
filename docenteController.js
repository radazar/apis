var config = require('./dbconfig');
const sql = require('mssql');
const { asignatura,estudiante,docente,record} = require('./modelos');

async function seleccionar() {
    try {
        let pool = await sql.connect(config);
        let docente = await pool.request()
        .execute("SP_S_DOCENTES");
        return docente.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function seleccionarId(id) {
    try {
        let pool = await sql.connect(config);        
        let docente = await pool.request()
        .input('ID', sql.Int,id)
        .execute('SP_SXID_DOCENTES')
        return docente.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function crear(docente) {
    try {
        let pool = await sql.connect(config);
        
        let insertDocente = await pool.request()
        .input('CODIGO', sql.NVarChar, docente.CODIGO)
        .input('NOMBRES', sql.NVarChar,docente.NOMBRES)
        .input('APELLIDOS', sql.NVarChar,docente.APELLIDOS)
        .input('COD_ASIG', sql.NVarChar,docente.COD_ASIG)
        .execute('SP_I_DOCENTES');
        return insertDocente.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//update
async function editar(docente) {
    try {
        let pool = await sql.connect(config);
        let updateDocente = await pool.request()

        .input('ID', sql.Int,docente.ID)
        .input('CODIGO', sql.NVarChar, docente.CODIGO)
        .input('NOMBRES', sql.NVarChar,docente.NOMBRES)
        .input('APELLIDOS', sql.NVarChar,docente.APELLIDOS)
        .input('COD_ASIG', sql.NVarChar,docente.COD_ASIG)
        .execute('SP_U_DOCENTES');
         return updateDocente.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Eliminar

async function deleteId(id) {
    try {
        let pool = await sql.connect(config);
        
        let deleteDocente = await pool.request()
        .input('ID', sql.Int,id)
        .execute('SP_D_DOCENTES');
         return deleteDocente.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {seleccionar: seleccionar,seleccionarId: seleccionarId,crear:crear,
    editar : editar,deleteId: deleteId};