const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Sockes',
            image: './assets/images/socks_green.jpeg',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpeg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpeg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})