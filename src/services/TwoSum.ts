export const twoSum = (nums: number[], target: number) => {
    console.log('Two Sum')
    console.log('Array number given: ', nums)
    console.log('Sum value expected: ', target)

    const comparer: number[] = [...nums]
    const preResult: number[] = []
    const mappingData: { value: number, index: number }[] = []

    nums.forEach((item: number, index) => {
        mappingData.push({ index, value: item })
    })

    comparer.forEach((item, index) => {
        mappingData.forEach(value => {
            if (index !== value.index) {
                if (item + value.value === target) preResult.push(value.index)
            }
        })
    })

    const result: number[] = [...new Set(preResult)].sort((a, b) => a - b)

    console.log(result)
    return result
}