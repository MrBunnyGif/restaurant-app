import Storage from "./Storage";
import { storageSectionKey } from "./constants";
import { SectionInfo } from "./types/Redux";

class Auth {
	private sectionOn: boolean;

	constructor() {
		this.sectionOn = false;
	}

	startSection(name: string, peopleNumber: string) {
		return new Promise((resolve, reject) => {
			if (this.sectionOn || !name || !peopleNumber)
				reject('Ocorreu um erro ao tentar iniciar a mesa')

			const info: SectionInfo = {
				name,
				peopleNumber,
				startTime: new Date(),
				tableNumber: new Date().getSeconds()
			}
			Storage.setCookie(storageSectionKey, info, 1)
			this.sectionOn = true

			resolve('teste')
		})
	}

	finishSection() {
		return new Promise((resolve, reject) => {
			if (!this.sectionOn)
				reject('Sessão não encontrada')

			Storage.deleteCookie(storageSectionKey)
			resolve('Sessão finalizada com sucesso')
			this.sectionOn = false
		})
	}

	get isSectionOn() {
		this.sectionOn = !!Storage.getCookie(storageSectionKey)
		return this.sectionOn
	}
}

export default new Auth()