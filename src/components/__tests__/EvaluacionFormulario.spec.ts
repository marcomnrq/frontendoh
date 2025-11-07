import EvaluacionFormulario from "../EvaluacionFormulario.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("EvaluacionFormulario", () => {
	it("muestra un formulario con edad e ingreso de input", () => {
		const wrapper = mount(EvaluacionFormulario);

		expect(wrapper.find("label").text()).toContain("Edad"); // Buscar un <label> y obtener el texto
		expect(wrapper.findAll("label")[1]?.text()).toContain("Ingresos");
		expect(wrapper.find("button[type=submit]").text()).toBe(
			"Conocer mi oferta",
		);
	});

	it("no muestra el resultado al cargar el componente", () => {
		const wrapper = mount(EvaluacionFormulario);

		expect(wrapper.find("div[id='resultado']").exists()).toBe(false);
	});
});
