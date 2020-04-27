let collection = {
    2548: {
        album: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name'],
    },
    2468: {
        album: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette'],
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: [],
    },
    5439: {
        album: 'ABBA Gold',
    },
}

function updateRecords(id, prop, value) {
    if (collection.hasOwnProperty(id)) {
        let target = collection[id]

        if (!target.hasOwnProperty(prop)) {
            if (prop === 'tracks') {
                let tracks = new Array()
                tracks.push(value)
                target[prop] = tracks
            } else {
                target[prop] = value
            }
        } else {
            if (value.length === 0) {
                delete target[prop]
            } else {
                if (prop === 'tracks') {
                    target[prop].push(value)
                } else {
                    target[prop] = value
                }
            }
        }
    }

    console.log(collection)
}

updateRecords(5439, 'artist', 'ABBA')
updateRecords(5439, 'tracks', 'Take a Chance on Me')
updateRecords(2548, 'artist', '')
updateRecords(2548, 'tracks', '')
