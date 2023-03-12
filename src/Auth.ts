class Auth {
	private sectionOn: boolean;
	private storageSectionKey: string;

	constructor() {
		this.sectionOn = false;
		this.storageSectionKey = 'sectionInfo';
	}

	verifyIfSectionOn() {
		if (localStorage.getItem(this.storageSectionKey))
			this.sectionOn = true
	}

	startSection(name: string, peopleNumber: string) {
		return new Promise((resolve, reject) => {
			if (this.sectionOn || !name || !peopleNumber)
				reject('Ocorreu um erro ao tentar iniciar a mesa')

			localStorage.setItem(this.storageSectionKey, JSON.stringify({
				name,
				peopleNumber,
				startTime: new Date(),
				tableNumber: new Date().getSeconds()
			}))
			this.sectionOn = true

			resolve('teste')
		})
	}

	finishSection() {
		return new Promise((resolve, reject) => {
			if (!this.sectionOn)
				reject('Sessão não encontrada')

			localStorage.removeItem(this.storageSectionKey)
			resolve('Sessão finalizada com sucesso')
		})
	}

	get isSectionOn() { return this.sectionOn }
}

export default new Auth()