export const helloWorld = () => {
    const str = 'Hello World'
    console.log('Hello World')
    return str
}
export const switchItUp = (number) =>  ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number]

export const capitalize = (text) => {
    if (text === null) {
        return undefined
    }
    const firstChar = text[0].toUpperCase()
    const restSubstring = text.slice(1)
    return `${firstChar}${restSubstring}`
}

export const square = (x) => x * x

export const getChildren = (arr) => arr.filter((child) => child.age < 17 ).map((child) => child.name)



    
