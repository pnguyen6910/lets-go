const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mapPoints");
const pointsSeed = [
    {
        position: {
            lat: 41.86211427069584,
            lng: -87.61665344238281,
            zoom: 13
        },
        location: "Soldier Field",
        details: "Da Bears play here."
    },
    {
        position: {
            lat: 41.879084073159994,
            lng: -87.63592563158475,
            zoom: 13
        },
        location: "Willis Tower",
        details: "We all really know it's the Sears Tower!"
    },
    {
        position: {
            lat: 41.8796,
            lng: -87.6237,
            zoom: 13
        },
        location: "Art Institue of Chicago",
        details: "Vita brevis, Ars longa."
    },
    {
        position: {
            lat: 41.8827,
            lng: -87.6233,
            zoom: 13
        },
        location: "Cloud Gate",
        details: "Otherwise known as The Bean."
    },
    {
        position: {
            lat: 41.8919,
            lng: -87.6051,
            zoom: 13
        },
        location: "Navy Pier",
        details: "Popular Tourist attraction. Go ride the Ferris Wheel!"
    },
    {
        position: {
            lat: 41.8380992726567,
            lng: -87.65110138119557,
            zoom: 13
        },
        location: "Maria's Packaged Goods and Community Bar",
        details: "Best bar in Bridgeport. Tell 'em Ryan sent you."
    },
    {
        position: {
            lat: 41.9663,
            lng: -87.6372,
            zoom: 13
        },
        location: "Montrose Beach",
        details: "They've got the best dog park in the Nation."
    },
    {
        position: {
            lat: 41.9484,
            lng: -87.6553,
            zoom: 13
        },
        location: "Wrigley Field",
        details: "Home of the Chicago Cubs, holy cow!"
    },
    {
        position: {
            lat: 41.922248064306004,
            lng: -87.63356184754218,
            zoom: 13
        },
        location: "Lincoln Park Zoo",
        details: "Come see some animals."
    },
    {
        position: {
            lat: 41.97933649765679,
            lng: -87.64982506368884,
            zoom: 13
        },
        location: "Foster Beach",
        details: "Have some fun in the sun."
    },
    {
        position: {
            lat: 41.795976907272824,
            lng: -87.57479364081703,
            zoom: 13
        },
        location: "Museum of Science and Industry",
        details: "Visit the U505.  The Omnimax is pretty cool too."
    },
    {
        position: {
            lat: 41.91813486644659,
            lng: -87.62737811671859,
            zoom: 13
        },
        location: "North Avenue Beach",
        details: "Another nice Chicago beach."
    },
    {
        position: {
            lat: 41.98420770046654,
            lng: -87.70643776164125,
            zoom: 13
        },
        location: "Legion Park",
        details: "A hub on the North Shore Channel Trail."
    },
    {
        position: {
            lat: 42.037531116813724,
            lng: -87.7104209976362,
            zoom: 13
        },
        location: "Sculpture Park",
        details: " A park with some interesting sculptures.  They change them up every once in a while"
    },
    {
        position: {
            lat: 42.15128810190887,
            lng: -87.78428644734801,
            zoom: 13
        },
        location: "Chicago Botanic Garden",
        details: "A beautiful destination for spending a day."
    },
    {
        position: {
            lat: 41.913908941901596,
            lng: -87.72013180311839,
            zoom: 13
        },
        location: "The 606",
        details: "An awesome bike path."
    },
    {
        position: {
            lat: 41.960048567172,
            lng: -87.63641595840454,
            zoom: 13
        },
        location: "Montrose Harbor",
        details: "A place where people parks their boats, more known for people just hanging out at the harbor."
    },
    {
        position: {
            lat: 41.97320506184882,
            lng: -87.65694558620451,
            zoom: 13
        },
        location: "John Vietnam Nguyen Mural",
        details: "A mural created by the community of Little Vietnam in memory of JVN."
    },
    {
        position: {
            lat: 41.9643007434533,
            lng: -87.64208078384398,
            zoom: 13
        },
        location: "Cricket Hill",
        details: "A big ol' hill! People come out here to hang out during the summer and sledding during the winter."
    },
    {
        position: {
            lat: 41.97300565065028,
            lng: -87.65779316425322,
            zoom: 13
        },
        location: "Generations",
        details: " A mural that shows the history of the Uptown neighborhood."
    },
    {
        position: {
            lat: 41.94057109115219,
            lng: -87.65403002500534,
            zoom: 13
        },
        location: "Vape312 Sheffield",
        details: "Chicago's number 1 vape store."
    },
    {
        position: {
            lat: 41.92114554032679,
            lng: -87.69518584012985,
            zoom: 13
        },
        location: "Greetings from Chicago Mural",
        details: "One of the must see murals in Chicago."
    },
    {
        position: {
            lat: 41.9181793059036,
            lng: -87.68958806991577,
            zoom: 13
        },
        location: "Robin Williams Mural",
        details: "A mural dedicated to everyone's favorite funny man."
    },
    {
        position: {
            lat: 41.910297034306474,
            lng: -87.66963645815848,
            zoom: 13
        },
        location: "Vivian Maier",
        details: "A beautiful mural in Wicker Park."
    },
    {
        position: {
            lat: 41.89423482650941,
            lng: -87.62371234595776,
            zoom: 13
        },
        location: "Marilyn Monroe",
        details: "A beautiful mural of Marilyn Monroe right on Michigan Ave."
    },
    {
        position: {
            lat: 41.87541129817996,
            lng: -87.62620076537132,
            zoom: 13
        },
        location: "Moose Bubblegum",
        details: "A mural outside of Columbia College."
    },
    {
        position: {
            lat: 41.86938256321454,
            lng: -87.62459814548492,
            zoom: 13
        },
        location: "From Bloom To Doom",
        details: "You like flowers? You like birds? This is definitely the mural for you."
    },
    {
        position: {
            lat: 41.86940053941659,
            lng: -87.64685511589049,
            zoom: 13
        },
        location: "Piccolo Sogno",
        details: "A mural from Eric Skotnes on a blank wall on Piccolo Sogno."
    },
    {
        position: {
            lat: 41.87435928144423,
            lng: -87.64992758631706,
            zoom: 13
        },
        location: "Riverfront Roots",
        details: "An abstract mural on the side of a bridge."
    },
    {
        position: {
            lat: 41.859669681596586,
            lng: -87.64676660299301,
            zoom: 13
        },
        location: "What I Am",
        details: "A mural on the corner of State an 16th st in South Loop."
    },
    {
        position: {
            lat: 41.858729276466995,
            lng: -87.63287544250487,
            zoom: 13
        },
        location: "Blue & White Flowers",
        details: "A mural in Chcago's china town."
    },
    {
        position: {
            lat: 41.84035339301721,
            lng: -87.7185096591711,
            zoom: 13
        },
        location: "Las Flores de las Almas Muetras",
        details: "A beautiful mural in Little Village."
    },
    {
        position: {
            lat: 41.897198180689045,
            lng: -87.6216048002243,
            zoom: 13
        },
        location: "Museum Of Contemporary Art Chicago",
        details: "A must visit museum in Chicago."
    },
    {
        position: {
            lat: 41.88149388218225,
            lng: -87.62373179197311,
            zoom: 13
        },
        location: "Crown Fountain",
        details: "A fountain with faces on it."
    },
    {
        position: {
            lat: 41.87581222833499,
            lng: -87.61889040470123,
            zoom: 13
        },
        location: "Buckingham Fountain",
        details: "A big ol' fountain. It's beautiful to watch at night."
    },
    {
        position: {
            lat: 41.997319614023475,
            lng: -87.78704819986068,
            zoom: 13
        },
        location: "Superdawg",
        details: "An iconic hotdog joint.  It's at the start of Des Plaines River Trail."
    },
    {
        position: {
            lat: 42.01042818664619,
            lng: -87.7141166308696,
            zoom: 13
        },
        location: "Lincolnwood Town Center",
        details: "A mall on the North Shore Channel Trail."
    },
    {
        position: {
            lat: 41.98329398208941,
            lng: -87.71295113524167,
            zoom: 13
        },
        location: "Bryn Mawr Breakfast Club",
        details: "Get some breakfast."
    },
    {
        position: {
            lat: 41.96221059089123,
            lng: -87.68150925693635,
            zoom: 13
        },
        location: "Half Acre Beer Company",
        details: "Grab a beer and have some food at this iconic Chicago brewery."
    },
    {
        position: {
            lat: 41.86646871405529,
            lng: -87.61693758682983,
            zoom: 13
        },
        location: "Field Museum",
        details: "Go see Sue!"
    },
    {
        position: {
            lat: 41.91152346759195,
            lng: -87.62490368682832,
            zoom: 13
        },
        location: "Chess Pavillion",
        details: "A nice stopping point on the trail to meet up and play chess."
    },
    {
        position: {
            lat: 41.90331769427661,
            lng: -87.62241446778263,
            zoom: 13
        },
        location: "Oak Street Beach",
        details: "Another fine lakefront Chicago beach."
    },
    {
        position: {
            lat: 41.89308470369228,
            lng: -87.61280746281695,
            zoom: 13
        },
        location: "Jane Addams Memorial Park",
        details: "Look for some interesting sculptures in this park by Navy Pier."
    },
    {
        position: {
            lat: 41.91329529391243,
            lng: -87.62113414450002,
            zoom: 13
        },
        location: "Photography Park",
        details: "A great spot to take photos of the Chicago skyline."
    },
    {
        position: {
            lat: 41.87913136708439,
            lng: -87.62501135799349,
            zoom: 13
        },
        location: "Symphony Center",
        details: "The home of the world-renowned Chicago Symphony Orchestra."
    },
    {
        position: {
            lat: 41.923783118654015,
            lng: -87.69801898682793,
            zoom: 13
        },
        location: "Revolution Brewing",
        details: "Have a pint of Anti-Hero, or enjoy some of their more hard to find barrel aged beers."
    },
    {
        position: {
            lat: 41.92107828756141,
            lng: -87.64566070217155,
            zoom: 13
        },
        location: "Oz Park",
        details: "Enjoy some sculptures of the main characters from 'The Wizard of Oz'."
    }
];
const userSeed = {
    username: 'admin',
}
const runSeeder = async () => {
    try {
        await db.User.remove({})
        await db.Map.remove({})
        const result = await db.Map.insertMany(pointsSeed, { raw: true })
        const mapIds = result.map(point => point._id)
        const finalUserData = {
            ...userSeed,
            points: mapIds
        }
        const user = await db.User.create(finalUserData)
        await db.Map.update({}, { user: user._id })
    } catch (err) {
        throw err
    }
    process.exit()
}
runSeeder()