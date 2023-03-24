const obj = {
    prop: '42',
    prop2: [8, 9, 10, {
        beautifulPropertyName: 88,
        'property with spaces': {
            a: {
                b: '',
                c: {
                    someProperty: [{
                        'prop name': 'I am a smart programmer',
                    }],
                },
            },
        },
    }],
    prop3: function () {
        return {
            baz: 'Hello',
            bar: {
                anotherBeautifulProp: [8, {
                    target: 'It was simple!',
                    qwe: [8, 17, 37],
                }],
            },
        };
    },
};

const stringProg = 'I am a smart programmer'
const stringSimple = 'It was simple!'

function logString(obj, string) {
    let answer = ''
    for(const element of  Object.keys(obj)) {
        if (obj[element] === string) {
            answer = obj[element]
        } else if (typeof obj[element] === 'object') {
            answer = logString(obj[element], string)
        }
    }
    return answer 
}
console.log(logString(obj, stringProg)); 
console.log(logString(obj, stringSimple));
