import id from "./resEnum.js"

const addictionData =
[
    [

        // *** Start of Internet Tab *** //

        {
            id: 0,
            name: "coolmathgames",
            text: "Visit coolmathgames.com",
            cooldown: 5*1000,
            resIds: [id.HAP],
            deltas: [5]
        },
        {
            id: 1,
            name: "facebook",
            text: "Look at Facebook memes",
            cooldown: 2*1000,
            resIds: [id.HAP],
            deltas: [4]
        },
        {
            id: 2,
            name: "reddit",
            text: "Read Reddit threads",
            cooldown: 10*1000,
            resIds: [id.HAP, id.TECH],
            deltas: [20, .5]
        },
        {
            id: 3,
            name: "4chan",
            text: "Look at traps on 4chan",
            cooldown: 30*1000,
            resIds: [id.HAP, id.TECH],
            deltas: [100, 1]
        },
        {
            id: 4,
            name: "conspiracytheories",
            text: "Listen to Alex Jones",
            cooldown: 60*1000,
            resIds: [id.HAP],
            deltas: [1000]
        }
    ],

    // *** Start of Food Tab *** //

    [
        {
            id: 0,
            name: "cookie",
            text: "Put your hand in the cookie jar",
            cooldown: 10*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [5, 10]
        },
        {
            id: 1,
            name: "icecream",
            text: "Eat some icecream",
            cooldown: 20*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [10, 40]
        },
        {
            id: 2,
            name: "mcronalds-eat",
            text: "Eat at McRonalds",
            cooldown:2*60*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [500, 1000]
        }
    ],

    // *** Start of Money Tab *** //

    [
        {
            id: 0,
            name: "mcronalds-work",
            text: "Flip burgers",
            cooldown: 8*1000,
            resIds: [id.MONEY],
            deltas: [10]
        },
        {
            id: 1,
            name: "pizzadelivery",
            text: "Deliver some pizza",
            cooldown: 30*1000,
            resIds: [id.MONEY],
            deltas: [80]
        }
    ]
]
export default addictionData
