"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React from "react"
import axios from "axios"; // importamos manejador de apis
import { useState } from "react"; // imprtamos hook
import { toast } from "react-hot-toast"; // para manejo de notificaciones.
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form"; // para manejo de formularios
import { FcGoogle } from "react-icons/fc"; // importamos logo de google
import Modal from "@modules/modals/Modal"; // importacion de componentes
import Heading from "@modules/heading/Heading"; // importacion de componenetes 
import Input from "@modules/inputs/Input"; // importacion de componentes
import Button from "@modules/button/Button"; // importacion de componentes 
import useRegisterModal from "@custom-hooks/userRegisterModal";

const RegisterModal = () => { // tener en cuenta que este es un componente statefull

  const registerModal = useRegisterModal(); // propiedad que se va a engarchar al cutomhook que tiene el alcance del estado global para manejar el tema de los modales 
  const [isLoading, setIsLoading] = useState(false);// se crea un estado local con useState

  // Para generar el constexto de inicializacion
  const { register, handleSubmit, formState: { errors },} = useForm<FieldValues>({ // aplicamos el hook de formatos
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Funcion para gestionar el envio // esto va a recibir una data asociada al registro
  const onSubmit: SubmitHandler<FieldValues> = data => { 
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registrado!");
        registerModal.onClose();
      })
      .catch(error => {
        toast.error("Ha ocurrido un error.");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  // Duncion donde se va  tener el contexto del contenido del body // PATRON DE DISENO CONTROLET INPUT
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Te damos la bienvenida a Airbnb" subtitle="Crea una cuenta!" />
      <Input id="email" label="Correo" disable={isLoading} register={register} errors={errors} required /> 
      <Input id="name" label="Nombre" disable={isLoading} register={register} errors={errors} required />
      <Input id="password" label="Password" disable={isLoading} register={register} errors={errors} required />
    </div> 
  );


  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="Continua con Google" icon={FcGoogle} onClick={() => {}} />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="fustify-center flex flex-row items-center gap-2">
          <div>Ya tienes una cuenta?</div>
          <div onClick={registerModal.onClose}  className="text-neutras-500 cursor-pointer hover:underline">
            {" "}
            Logueate
          </div>
        </div>  
      </div>
    </div>
  );


  return(
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Iniciar sesion o registrarse"
      actionLabel="Continua"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal