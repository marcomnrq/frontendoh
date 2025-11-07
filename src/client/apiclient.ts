export interface IEvaluacionResponse {
	status: string;
	mensaje: string;
	data: {
		aprobado: boolean;
		categoria: string;
		linea: number;
	};
}

export async function evaluarTarjeta(
	edad: number,
	ingresos: number,
): Promise<IEvaluacionResponse> {
	const response = await fetch(
		`http://localhost:8000/evaluaciones/tarjetas?edad=${edad}&ingresos=${ingresos}`,
	);
	if (!response.ok) {
		throw new Error("Ocurrió un error al ejecutar la petición");
	}

	return await response.json();
}
