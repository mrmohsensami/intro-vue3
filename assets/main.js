const app = Vue.createApp({
    data: function() {
        return {
            product: 'Sockes',
            image: './assets/images/socks_green.jpeg',
            inventory: 5,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ]
        }
    }
})