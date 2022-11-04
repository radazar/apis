var config = require('./dbconfig');
const sql = require('mssql');
const { asignatura,estudiante,docente,record} = require('./modelos');

async function seleccionar() {
    try {
        let pool = await sql.connect(config);
        let estudiante = await pool.request()
            .execute("SP_S_ESTUDIANTES");
        return estudiante.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function seleccionarId(id) {
    try {
        let pool = await sql.connect(config);
        let estudiante = await pool.request()
            .input('ID', sql.Int, id)
            .execute('SP_SXID_ESTUDIANTES')
        return estudiante.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function crear(estudiante) {
    try {
        let pool = await sql.connect(config);

        let insertEstudiante = await pool.request()
            .input('CODIGO', sql.NVarChar, estudiante.CODIGO)
            .input('NOMBRES', sql.NVarChar, estudiante.NOMBRES)
            .input('APELLIDOS', sql.NVarChar, estudiante.APELLIDOS)
            .input('SEMESTRE', sql.Int, estudiante.SEMESTRE)
            .input('CARRERA', sql.NVarChar, estudiante.CARRERA)
            .input('COD_ASIG', sql.NVarChar, estudiante.COD_ASIG)
            .execute('SP_I_ESTUDIANTES');
        return insertEstudiante.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//update
async function editar(estudiante) {
    try {
        let pool = await sql.connect(config);
        let updateEstudiante = await pool.request()

            .input('ID', sql.Int, estudiante.ID)
            .input('CODIGO', sql.NVarChar, estudiante.CODIGO)
            .input('NOMBRES', sql.NVarChar, estudiante.NOMBRES)
            .input('APELLIDOS', sql.NVarChar, estudiante.APELLIDOS)
            .input('SEMESTRE', sql.Int, estudiante.SEMESTRE)
            .input('CARRERA', sql.NVarChar, estudiante.CARRERA)
            .input('COD_ASIG', sql.NVarChar, estudiante.COD_ASIG)
            .execute('SP_U_ESTUDIANTES');
        return updateEstudiante.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//Eliminar

async function deleteId(id) {
    try {
        let pool = await sql.connect(config);

        let deleteEstudiante = await pool.request()
            .input('ID', sql.Int,id)
            .execute('SP_D_ESTUDIANTES');
        return deleteEstudiante.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
     seleccionar,  seleccionarId, crear,
     editar,  deleteId
};