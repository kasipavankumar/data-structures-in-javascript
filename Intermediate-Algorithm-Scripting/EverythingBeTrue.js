// Everything Be True

function truthCheck(collection, pre) {
    if (Array.isArray(collection)) {
        return collection.every(function (object) {
            return object.hasOwnProperty(pre) && object[pre]
        })
    }
}

function test(actualValue, expectedValue) {
    if (
        typeof actualValue === 'boolean' &&
        typeof expectedValue === 'boolean'
    ) {
        let { log } = console

        actualValue === expectedValue
            ? log(`${expectedValue} equals ${actualValue} - Passed ✔️`)
            : log(`${expectedValue} not equals ${actualValue} - Failed ❌`)
    }
}

// Tests
test(
    truthCheck(
        [
            { user: 'Tinky-Winky', sex: 'male' },
            { user: 'Dipsy', sex: 'male' },
            { user: 'Laa-Laa', sex: 'female' },
            { user: 'Po', sex: 'female' },
        ],
        'sex'
    ),
    true
)
test(
    truthCheck(
        [
            { user: 'Tinky-Winky', sex: 'male' },
            { user: 'Dipsy' },
            { user: 'Laa-Laa', sex: 'female' },
            { user: 'Po', sex: 'female' },
        ],
        'sex'
    ),
    false
)
test(
    truthCheck(
        [
            { user: 'Tinky-Winky', sex: 'male', age: 0 },
            { user: 'Dipsy', sex: 'male', age: 3 },
            { user: 'Laa-Laa', sex: 'female', age: 5 },
            { user: 'Po', sex: 'female', age: 4 },
        ],
        'age'
    ),
    false
)
test(
    truthCheck(
        [
            { name: 'Pete', onBoat: true },
            { name: 'Repeat', onBoat: true },
            { name: 'FastForward', onBoat: null },
        ],
        'onBoat'
    ),
    false
)
test(
    truthCheck(
        [
            { name: 'Pete', onBoat: true },
            { name: 'Repeat', onBoat: true, alias: 'Repete' },
            { name: 'FastForward', onBoat: true },
        ],
        'onBoat'
    ),
    true
)
test(truthCheck([{ single: 'yes' }], 'single'), true)
test(truthCheck([{ single: '' }, { single: 'double' }], 'single'), false)
test(truthCheck([{ single: 'double' }, { single: undefined }], 'single'), false)
test(truthCheck([{ single: 'double' }, { single: NaN }], 'single'), false)
