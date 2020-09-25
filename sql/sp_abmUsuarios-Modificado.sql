DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`ajapoweb`@`localhost` PROCEDURE `sp_abmUsuarios` (IN `_tipo` CHAR(1), IN `_id` INT, IN `_usuario` VARCHAR(30), IN `_password` VARCHAR(250), IN `_nombre` VARCHAR(250), IN `_direccion` VARCHAR(250), IN `_email` VARCHAR(100), IN `_fecha_nac` DATE, IN `_type` VARCHAR(7), IN `_fecha_crea` DATE)  BEGIN
/*Guarda*/
IF _tipo = 'a' THEN
	INSERT INTO ajapoweb_db.users 
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
	UPDATE ajapoweb_db.users SET  ajapoweb_db.estado = 'eliminado' WHERE id = _id;
	END IF;
/*Modificar*/	
IF _tipo = 'm' THEN
	UPDATE 	ajapoweb_db.users SET 
				nombre 		= _nombre, 
				direccion 	= _direccion, 
				email 		= _email, 
				fecha_nac 	= _fecha_nac, 
				type 		= _type, 
				fecha_crea 	= _fecha_crea 
	WHERE 	ajapoweb_db.id 	= _id;
END IF;
END$$

DELIMITER ;