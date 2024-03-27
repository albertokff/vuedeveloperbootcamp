Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            backgroundBox: '#8d81f3',
            colorTitle: '#8d81f3'
        }
    },
    computed: {
        box() {
            return {
                transform: `
                perspective(${this.perspective}px)
                rotatex(${this.rotateX}deg)
                rotatey(${this.rotateY}deg)
                rotatez(${this.rotateZ}deg)`,
                background: this.backgroundBox
            }
        },
        schemaColors() {
            return {
               color: this.colorTitle       
            } 
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
            this.backgroundBox = '#8d81f3'
            this.colorTitle = '#8d81f3'
        },
        async copy() {
            let text = `transform: ${this.box.transform}`;
            this.backgroundBox = 'orange'
            this.colorTitle = 'orange'
            await navigator.clipboard.writeText(text);

            alert("CSS Copied to Clipboard!")
        }
    }
}).mount('#app')