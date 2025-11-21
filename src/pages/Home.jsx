import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom"

export const Home = () => {
	const slug = "Carlossan"
	let[lista, setLista] = useState([])


  const {store, dispatch} =useGlobalReducer()
  const obtenerContactos = async () => {
	try {
		const responseAgenda = await fetch (`https://playground.4geeks.com/contact/agendas/${slug}`)
		if (responseAgenda.status === 404) {
			const responseUsuario = await fetch (`https://playground.4geeks.com/contact/agendas/${slug}`, {
				method: "POST",
				headers: {"Content-Type": "application/json"}
			})
			await responseUsuario.json()

		}
		const respuesta = await fetch (`https://playground.4geeks.com/contact/agendas/${slug}/contacts`)
		const data = await respuesta.json()
		setLista (data.contacts)
		dispatch ({type:"get_contactos", payload:data.contacts})
	} catch (error) {
		console.log(error);
			
	}
  }
  useEffect(()=>{ obtenerContactos() },[])

  const handleDelete = async (id) => {
	try {
		const response = await fetch(
			`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`,
			{ method: "DELETE" }
		);

		if (!response.ok) {
			throw new Error("Error al eliminar el contacto");
		}
		
		setLista(lista.filter(contact => contact.id !== id));
		dispatch({ type: "delete_contact", payload: id });

	}	catch (error) {
		console.error("Error eliminando el contacto")
	}
  };

	return (
		<div className="text-center mt-5">
			<h1>Agenda de {slug}</h1>
			{lista.map((item)=>(
				<Card informacion={item} key ={item.id} onDelete={handleDelete}/>
			))}
			
		</div>
	);
}; 