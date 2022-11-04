var config = require('./dbconfig');
const sql = require('mssql');
const { asignatura,estudiante,docente,record} = require('./modelos');

async function seleccionar() {
    try {
        let pool = await sql.connect(config);
        let insignia = await pool.request()
        .execute("SP_S_RECORD");
        return insignia.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function seleccionarId(ID) {
    try {
        let pool = await sql.connect(config);        
        let insignia = await pool.request()
          
        .input('ID', sql.Int,ID)
          
        .execute("SP_SXID_RECORD");
        return insignia.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function crear(record) {
    try {
        let pool = await sql.connect(config);
        let crearRecord = await pool.request()
          
        .input('CODIGO', sql.NVarChar,record.CODIGO)
        .input('PERIODO', sql.NVarChar, record.PERIODO)
        .input('NOTA1', sql.Decimal,record.NOTA1)
        .input('NOTA2', sql.Decimal,record.NOTA2)
        .input('ESTUDIANTE_COD', sql.NVarChar,record.ESTUDIANTE_COD)
        .input('DOCENTE_COD', sql.NVarChar,record.DOCENTE_COD)
          
        .execute('SP_I_RECORD');
        return crearRecord.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//update
async function editar(record) {
    try {
        let pool = await sql.connect(config);
        let editarRecord = await pool.request()
          
        .input('ID', sql.Int,record.ID)
        .input('CODIGO', sql.NVarChar,record.CODIGO)
        .input('FECHA_CREACION', sql.Date,record.FECHA_CREACION)
        .input('PERIODO', sql.NVarChar, record.PERIODO)
        .input('NOTA1', sql.Decimal,record.NOTA1)
        .input('NOTA2', sql.Decimal,record.NOTA2)
        .input('ESTUDIANTE_COD', sql.NVarChar,record.ESTUDIANTE_COD)
        .input('DOCENTE_COD', sql.NVarChar,record.DOCENTE_COD)
      
        .execute('SP_U_RECORD');
         return editarRecord.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Eliminar

async function deleteId(id) {
    try {
        let pool = await sql.connect(config);
        let eliminarRecord = await pool.request()
        .input('ID', sql.INT,id)
        .execute('SP_D_RECORD')
         return eliminarRecord.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {seleccionar: seleccionar,
     seleccionarId: seleccionarId,
    crear:crear,
    editar : editar,
    deleteId: deleteId
    };