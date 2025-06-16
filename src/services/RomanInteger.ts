type RuleItem = { value: number, sist: number }
type RomanKey = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

const rule: Record<RomanKey, RuleItem> = {
    'I': { value: 1, sist: 0 },
    'V': { value: 5, sist: 1 },
    'X': { value: 10, sist: 2 },
    'L': { value: 50, sist: 3 },
    'C': { value: 100, sist: 4 },
    'D': { value: 500, sist: 5 },
    'M': { value: 1000, sist: 6 },
}

export const romanToInt = (s: string) => {
    console.log('Converting Roman to Integer')
    console.log('String given :', s.toUpperCase())

    const toUpp = s.toUpperCase()
    const arrOfStr = Array.from(toUpp)
    const arrNumber: number[] = []
    const processNumber: number[] = []
    let result: number = 0

    console.log(arrOfStr)
    arrOfStr.forEach((item: string) => arrNumber.push(rule[item as RomanKey].value))
    console.log(arrNumber)

    arrNumber.forEach((item: number, index) => {
        if (arrNumber[index - 1] || arrNumber[index + 1]) {
            if (item > arrNumber[index - 1]) processNumber.push(item - arrNumber[index - 1])
        }
    })

    console.log(processNumber)
    return result
}