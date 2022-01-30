//formato tentual

const obj = {a:1 ,b:2 ,c:3, d:4,soma(){
    return a + b + c + d
}}
console.log(JSON.stringify(obj))
//Use a função JSON.parse()para converter texto em um objeto JavaScript:
console.log(JSON.parse('{"a":1,"B":2}'))
