import Storage from "./Storage";

class Auth {
	private sectionOn: boolean;
	private storageSectionKey: string;

	constructor() {
		this.sectionOn = false;
		this.storageSectionKey = 'sectionInfo';
	}

	startSection(name: string, peopleNumber: string) {
		return new Promise((resolve, reject) => {
			if (this.sectionOn || !name || !peopleNumber)
				reject('Ocorreu um erro ao tentar iniciar a mesa')

			const info = {
				name,
				peopleNumber,
				startTime: new Date(),
				tableNumber: new Date().getSeconds()
			}
			Storage.setCookie(this.storageSectionKey, info, 1)
			this.sectionOn = true

			resolve('teste')
		})
	}

	finishSection() {
		return new Promise((resolve, reject) => {
			if (!this.sectionOn)
				reject('Sessão não encontrada')

			Storage.deleteCookie(this.storageSectionKey)
			resolve('Sessão finalizada com sucesso')
			this.sectionOn = false
		})
	}

	get isSectionOn() {
		this.sectionOn = !!Storage.getCookie(this.storageSectionKey)
		return this.sectionOn
	}
}

export default new Auth()