// Creare carosello foto
// BONUS: autoplay con una timing functions per transizione foto

var app = new Vue ({
    el: "#root",

    data:{
        img_index: 0,
        images: [
            "./img/img (1).jpg",
            "./img/img (2).jpg",
            "./img/img (3).jpg",
            "./img/img (4).jpg",
            "./img/img (5).jpg"
        ],
        t:0
    },

    methods:{

        next: function(){
            if(this.img_index < (this.images.length - 1)){
                this.img_index ++;
            } else{
                this.img_index = 0;
            }
            // Al click sul pallino resetto il time interval
            clearInterval(this.t);
            // e lo riavvio a partire dall imaggine selezionata
            this.change_img();
        },

        prev: function(){
            if(this.img_index > 0){
                this.img_index --;
            } else{
                this.img_index = (this.images.length - 1);
            }
            // Al click sul pallino resetto il time interval
            clearInterval(this.t);
            // e lo riavvio a partire dall imaggine selezionata
            this.change_img();
        },

        change_img: function(){
            this.t = setInterval(() => {  // setInterval(function(){  <---- se scrivo così non funziona .. ??
                if(this.img_index == (this.images.length - 1) ){
                    this.img_index = 0;
                }else {

                    this.img_index++;
                }
                // console.log(this.img_index);
            }, 1500)
        },

        select_image: function(index){
            this.img_index = index;
            // Al click sul pallino resetto il time interval
            clearInterval(this.t);
            // e lo riavvio a partire dall imaggine selezionata
            this.change_img();
        }

    },  //Chiusura Methods

    created:function() {
        this.change_img();
    }


});
