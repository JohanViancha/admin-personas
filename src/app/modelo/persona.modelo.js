
class Persona {

  constructor(nombre, apellido, telefono,email, direccion,estado,rol,password) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._telefono = telefono;
    this._email = email;
    this._direccion = direccion;
    this._estado = estado;
    this._rol = rol;
    this._password = password;
  }

  get nombre(){
    return this._nombre;
  }

  get apellido(){
    return this._apellido;
  }

  get telefono(){
    return this._telefono;
  }

  get email(){
    return this._email;
  }

  get direccion(){
    return this._direccion;
  }

  get estado(){
    return this._estado;
  }

  get rol(){
    return this._rol;
  }

  get password(){
    return this._password;
  }
}


module.exports = Persona;
