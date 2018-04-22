/*Elimina procedimiento existente*/
DROP PROCEDURE sp_abmUsuarios;
/*Procedimiento encargado de guardar, actualizar y eliminar datos de la Tabla*/
CREATE PROCEDURE sp_abmUsuarios(
		_tipo char(1),
		_id int,
		_usuario varchar(30),
		_password varchar(250),
		_nombre varchar(250),
		_direccion varchar(250),
		_email varchar(100),
		_fecha_nac date,
		_type varchar(7), -- miembro, admin
		_fecha_crea date
)
BEGIN
/*Guarda*/
IF _tipo = 'a' THEN
	INSERT INTO ajapoweb.users 
				(usuario, 
				password, 
				nombre, 
				direccion, 
				email, 
				fecha_nac, 
				type, 
				fecha_crea, 
				estado) 
	VALUES 		(_usuario, 
				_password, 
				_nombre, 
				_direccion, 
				_email, 
				_fecha_nac, 
				'miembro', 
				_fecha_crea, 
				'activo');

END IF;
	/*SELECT SCOPE_IDENTITY()*/
/*Eliminar*/
IF _tipo = 'b' THEN
	UPDATE ajapoweb.users SET  ajapoweb.estado = 'eliminado' WHERE id = _id;
	END IF;
/*Modificar*/	
IF _tipo = 'm' THEN
	UPDATE 	ajapoweb.users SET 
				nombre 		= _nombre, 
				direccion 	= _direccion, 
				email 		= _email, 
				fecha_nac 	= _fecha_nac, 
				type 		= _type, 
				fecha_crea 	= _fecha_crea 
	WHERE 	ajapoweb.id 	= _id;
END IF;
END$$