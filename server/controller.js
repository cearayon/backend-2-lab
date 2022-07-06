
const house = require('./db.json')
let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(house)

    },
    deleteHouse: (req, res) => { 
        const existingId = +req.params.id
        let index = house.findIndex(house => house.id === existingId)
        house.splice(index, 1)
        res.status(200).send(house)

    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            address,
            price,
            imageURL,
            id: globalId
        }
        house.push(newHouse)
        res.status(200).send(house)
        globalId++
    },
    updateHouse: (req, res) => {
        const existingId = +req.params.id
        let index = house.findIndex(house => house.id === existingId)

        if(req.body.type === 'plus'){
            house[index].price += 10000;
            res.status(200).send(house);
        } else {
            house[index].price -= 10000;
            res.status(200).send(house)
        }

    },
}