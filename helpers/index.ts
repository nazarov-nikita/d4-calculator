export const objectKeys = <T extends object>(object: T) => Object.keys(object) as (keyof T)[]

export const stringIsInt = (value: string) => /^\d+$/.test(value)

export const jsonParse = <T>(value: string, withError = false): T | null => {
	try {
		if (typeof value === 'number' || stringIsInt(value)) {
			throw null
		}

		return JSON.parse(value)
	} catch (error) {
		return null
	}
}
