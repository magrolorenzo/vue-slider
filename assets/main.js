// Creare carosello foto
// BONUS: autoplay con una timing functions per transizione foto

var app = new Vue ({
    el: "#root",

    data:{
        img_index: 0,
        images: [
            "C:/Users/Lorenzo/Desktop/boolean/vue-slider/img/img (1).jpg",
            "C:/Users/Lorenzo/Desktop/boolean/vue-slider/img/img (2).jpg",
            "C:/Users/Lorenzo/Desktop/boolean/vue-slider/img/img (3).jpg",
            "C:/Users/Lorenzo/Desktop/boolean/vue-slider/img/img (4).jpg",
            "C:/Users/Lorenzo/Desktop/boolean/vue-slider/img/img (5).jpg"
        ]
    },

    methods:{

        next: function(){
            if(this.img_index < (this.images.length - 1)){
                this.img_index ++;
            } else{
                this.img_index = 0;
            }
        },

        prev: function(){
            if(this.img_index > 0){
                this.img_index --;
            } else{
                this.img_index = (this.images.length - 1);
            }
        },

        change_img: function(){
            setInterval(function(){
                this.img_index++;
                if(this.img_index == (this.images.length - 1) ){
                    this.img_index = 0;
                }
            }, 1000)
        }

    }, //Chiusura Methods


    created() {
        this.change_img();
        console.log("AAAAAAAAAAAAAAAAAAAAA");
    }


});
