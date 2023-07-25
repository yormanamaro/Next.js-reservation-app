"use client"; // Para denotar y especificar que esta molecula trabajara desde el cliente y no del server.
import React from "react"
import axios from "axios"; // importamos manejador de apis
import { useState } from "react"; // imprtamos hook
import { toast } from "react-hot-toast"; // para manejo de notificaciones.
import { FieldValue, SubmitHandler, useForm } from "react-hook-form"; // para manejo de formularios
import { FcGoogle } from "react-icons/fc"; // importamos logo de google
import Modal from "@modules/modals/Modal"; // importacion de componentes
import Heading from "@modules/heading/Heading"; // importacion de componenetes 
import Input from "@modules/inputs/Input"; // importacion de componentes
import Button from "@modules/button/Button"; // importacion de componentes 
import useRegisterModal from "@custom-hooks/userRegisterModal";

const RegisterModal = () => {
    return <div>Hello i am RegisterModal</div>
};

export default RegisterModal