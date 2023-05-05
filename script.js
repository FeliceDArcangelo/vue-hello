const app = Vue.createApp({
    data (){
        return {
            title: 'Hey I\'m using vuejs ;)',
            titleCss: 'text-center p-1',
            titleImg: 'n_three.jpeg',
            titleImgCss: 'w-50'
        }
    },
    methods: {
        changeImg(){
            if (this.titleImg == 'n_three.jpeg'){
                this.titleImg = 'n_two.jpeg'
            } else {
                this.titleImg = 'n_three.jpeg'
            }
        }
    }
})

app.mount('#root')