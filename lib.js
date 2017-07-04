'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

const arr = [{
  customer: '', total: 0
}]

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      arr.length = 0
      carts.forEach(function (cart) {
        const {customer, items} = cart
        let total = 0
        items.forEach(function (item) {
          listings.forEach(function (listing) {
            if (listing.name === item) {
              total += listing.price
            }
          })
        })
        arr.push({customer: customer, total: total})
      })
      return arr
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
