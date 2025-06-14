export const isPalindrome = (numberProvided: number): boolean => {
    console.log('Palindrome')
    console.log('Number provided: ', numberProvided)

    let result = false
    const providedToStr = numberProvided.toString()
    const arrStr = Array.from(providedToStr)
    const comparer: string[] = []
    arrStr.forEach(item => comparer.unshift(item))

    const checker: boolean[] = []
    arrStr.forEach((item, index) => {
        if (arrStr[index] === comparer[index]) checker.push(true)
        if (arrStr[index] !== comparer[index]) checker.push(false)
    })

    if (arrStr[0] !== comparer[0]) return result
    const isContainFalse = checker.includes(false)
    if (!isContainFalse) result = true

    return result
}