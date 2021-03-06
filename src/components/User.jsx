import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
	const { id } = useParams();

	const [pueblo, setPueblo] = useState([]);

	useEffect(() => {
		const obtenerDatos = async () => {
			const data = await fetch(
				`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
			);
			const users = await data.json();
			setPueblo(users);
		};
		obtenerDatos();
	}, [id]);

	return (
		<div>
			<h3>{pueblo.name}</h3>
			<p>Tipo de bonus: {pueblo.team_bonus}</p>
			<p>Tipo de armas: {pueblo.army_type}</p>
			<p>Tipo de bonus de civilizacion: {pueblo.civilization_bonus}</p>
		</div>
	);
};

export default User;
