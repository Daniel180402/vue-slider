const app = new Vue({
    el : "#app",
    data : {

        activeImage: 0,
        images: [
            {
                url: "https://siviaggia.it/wp-content/uploads/sites/2/2021/02/svezia-10-foto.jpg",
                title: "Svezia",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae delectus nihil? Nobis dolorem officiis asperiores quia esse sequi, hic a in quos praesentium ipsum eligendi, reprehenderit maxime voluptate fugiat."
            },
            {
                url: "http://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg",
                title: "Perù",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae delectus nihil? Nobis dolorem officiis asperiores quia esse sequi, hic a in quos praesentium ipsum eligendi, reprehenderit maxime voluptate fugiat."
            },
            {
                url: "https://www.enel.com/content/dam/enel-com/immagini/master-azienda_2400x1160/storie_2400x1160/santiago-del-cile-strade-palazzi_2400x1160.jpg",
                title: "Chile",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae delectus nihil? Nobis dolorem officiis asperiores quia esse sequi, hic a in quos praesentium ipsum eligendi, reprehenderit maxime voluptate fugiat."
            },
            {
                url: "https://nbts.it/wp-content/uploads/2020/08/nbts-viaggi-argentina-iguazu-waterfall-cascate.jpg",
                title: "Argentina",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae delectus nihil? Nobis dolorem officiis asperiores quia esse sequi, hic a in quos praesentium ipsum eligendi, reprehenderit maxime voluptate fugiat."
            },
            {
                url: "https://travel.thewom.it/pictures/2018/06/06/colombia_1.jpeg",
                title: "Colombia",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae delectus nihil? Nobis dolorem officiis asperiores quia esse sequi, hic a in quos praesentium ipsum eligendi, reprehenderit maxime voluptate fugiat."
            }],
    },

    methods: {
        previousSlide(){
            if (this.activeImage == 0 ){
                this.activeImage = this.images.length -1;
            }
            else{
                this.activeImage--;
            }
        },

        nextSlide(){
            if (this.activeImage == this.images.length -1 ){
                this.activeImage = 0;
            }
            else{
                this.activeImage++;
            }
        }
    }
});