module.exports = function toReadable(number) {
    let num = number.toString()
    const before20 = [
        ['zero'],
        ['one'],
        ['two'],
        ['three'],
        ['four'],
        ['five'],
        ['six'],
        ['seven'],
        ['eight'],
        ['nine'],
        ['ten'],
        ['eleven'],
        ['twelve'],
        ['thirteen'],
        ['fourteen'],
        ['fifteen'],
        ['sixteen'],
        ['seventeen'],
        ['eighteen'],
        ['nineteen'],
    ]

    const dozens = [
        [''], [''],
        ['twenty'],
        ['thirty'],
        ['forty'],
        ['fifty'],
        ['sixty'],
        ['seventy'],
        ['eighty'],
        ['ninety'],
    ]


    if (num < 20) return before20[num]
    if (num.length === 2 && +num % 10 === 0) return dozens[+num / 10]
    if (num.length === 2) return `${dozens[num[0]]} ${before20[num[1]]}`
    if (num.length === 3 && +num % 100 === 0) return `${before20[num[0]]} hundred`
    if (num.length === 3) {
        if (+num[1] === 1 && +num[2] === 0) return `${before20[num[0]]} hundred ten`
        if (+num[2] === 0) return `${before20[num[0]]} hundred ${dozens[num[1]]}`
        if (+(num[1] + num[2]) < 20) return `${before20[num[0]]} hundred ${before20[+(num[1] + num[2])]}`
        return `${before20[num[0]]} hundred ${dozens[num[1]]} ${before20[num[2]]}`
    }

}
