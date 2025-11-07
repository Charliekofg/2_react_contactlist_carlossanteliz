import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";
import Card from "../components/Card.jsx";

export const Home = () => {
	const slug = "Carlossan"
	let[lista, setLista] = UseState([])


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
  useEffect(()=>{obtenerContactos()},[])

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			{/* {lista.map((item)=>())} */}
			<Card/>
		</div>
	);
}; 