import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/service/personas.service';
import Swal from 'sweetalert2';
import Persona from 'src/app/modelo/persona.modelo.js';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {

  @Input() detallePersona:Persona;
  form: FormGroup;
  UsuNom:string;
  UsuApe:string;
  UsuTelFij:string;
  UsuEmail:string;
  UsuDirRes:string;
  UsuarioEstado:string;
  UsuRol:string;
  Password:string
  objectPersona:any;
  persona: Persona;
  titulo:string='Registrar persona';
  id:string | undefined;
  swal:any;
  constructor(private personasService:PersonasService, private fb:FormBuilder, private router:Router, private route:ActivatedRoute) {
      this.id = this.route.snapshot.paramMap.get('id');
      if(!this.id){
        this.titulo = 'Registrar persona';
        this.form = this.fb.group({
          UsuNom:['', Validators.required],
          UsuApe:['', Validators.required],
          UsuTelFij:['', Validators.required],
          UsuEmail:['', Validators.required],
          UsuDirRes:['', Validators.required],
          UsuarioEstado:['Activo', Validators.required],
          UsuRol:['Administrador', Validators.required],
          Password:['', Validators.required]
        });

        this.UsuNom = '';
        this.UsuApe = '';
        this.UsuDirRes = '';
        this.UsuEmail = '';
        this.UsuRol='Administrador';
        this.UsuTelFij = '';
        this.UsuarioEstado = 'Activo';
      }
   }



    registrarPersona(){

      this.swal = Swal.fire({
        title: "Cargando ...",
        allowOutsideClick: false,
        text: "Por favor espere un momento",
        didOpen: () => {
          Swal.showLoading();
        }
      });
      if(!this.id){
          this.nuevaPersona();
      }else{
        this.editarPersona(this.id);
      }


   }


   nuevaPersona(){
      this.persona = new Persona(this.form.value.UsuNom,this.form.value.UsuApe,this.form.value.UsuTelFij,this.form.value.UsuEmail,this.form.value.UsuDirRes,this.form.value.UsuarioEstado,this.form.value.UsuRol,this.form.value.Password);
        this.personasService.registrarPersona(this.persona).then(()=>{
          Swal.fire({
            title: 'Exitoso!',
            text: 'La persona fue creada',
            icon: 'success',
            confirmButtonText: 'Ok'
          });

          this.form.reset();
          this.swal.close();
        })
        .catch((err)=>{
          Swal.fire({
            title: 'Error!',
            text: err,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        });
   }

   editarPersona(id:string){
      this.persona = new Persona(this.form.value.UsuNom,this.form.value.UsuApe,this.form.value.UsuTelFij,this.form.value.UsuEmail,this.form.value.UsuDirRes,this.form.value.UsuarioEstado,this.form.value.UsuRol,this.form.value.Password);
      this.personasService.editarPersona(id, this.persona).then(()=>{
        Swal.fire({
          title: 'Exitoso!',
          text: 'La persona fue editada',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(()=>{

        });

      })
      .catch((err)=>{
        Swal.fire({
          title: 'Error!',
          text: err,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
   }


  ngOnInit(): void {
    if(this.id){
      const data = this.personasService.getPersonaEditar();
      this.id = data.id;
      this.titulo = 'Editar persona';
      this.form = this.fb.group({
        UsuNom:[data._nombre, Validators.required],
        UsuApe:[data._apellido, Validators.required],
        UsuTelFij:[data._telefono, Validators.required],
        UsuEmail:[data._email, Validators.required],
        UsuDirRes:[data._direccion, Validators.required],
        UsuarioEstado:[data._estado, Validators.required],
        UsuRol:[data._rol, Validators.required],
        Password:[data._password, Validators.required]
      });

      this.UsuNom = data._nombre;
      this.UsuApe = data._apellido;
      this.UsuDirRes = data._direccion;
      this.UsuEmail = data._email;
      this.UsuRol=data._rol;
      this.UsuTelFij = data._telefono;
      this.UsuarioEstado =data._estado;
      this.Password =data._password;
    }


  }

  ngOnDestroy(): void {
    this.form.reset();
  }


}
