import { conectar } from "../modelo/db_conectar.js"
var crud_estudiante=({})
crud_estudiante.leer = (req, res) =>{

    conectar.query('SELECT id_estudiantes,carne,nombres,apellidos,direccion,telefono,correo_electronico,id_tipo_sangre,date_format(fecha_nacimiento, "%d-%m-%Y") as fecha_nacimiento FROM estudiantes',(error,results)=>{
        if (error){
            throw error;
        }else{
            res.render('clientes/index',{resultado:results})
        }
    })

};
crud_estudiante.cud = (req,res)=>{
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id_estudiantes = req.body.txt_id_estudiantes;
    const carne = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_correo;
    const id_tipo_sangre = req.body.txt_sangre;
    const fecha_nacimiento = req.body.txt_fn;
  
    if (btn_crear){
        conectar.query('insert into estudiantes SET ?',{carne:carne,nombres:nombres, apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento}, (error, results)=>{
            if(error){
                console.log(error);
            }else{
                //console.log(results);   
                res.redirect('/');         
            }
        });
       
    }
    if (btn_actualizar){
        conectar.query('update estudiantes SET ? where id_cliente = ?',[{carne:carne,nombres:nombres, apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,id_tipo_sangre:id_tipo_sangre,fecha_nacimiento:fecha_nacimiento},id_estudiantes], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/');         
            }
        });
       
    }
    if (btn_borrar){
        conectar.query('delete from clientes  where id_cliente = ?',[id_estudiantes], (error, results)=>{
            if(error){
                console.log(error);
            }else{   
                res.redirect('/');         
            }
        });
       
    }
    
        

    
    
};
export{crud_estudiante}