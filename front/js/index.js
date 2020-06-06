var vm = new Vue({
    el: "#app",
    data: {
        videos: []
    },
    methods: {
        go: function (video) {
            window.location.href='/play?source='+video;
        }
    },
    mounted() {
        axios
            .get("/videoList")
            .then(response => {
                if (response.data != '[]') {
                    this.videos = response.data;
                } else {
                    console.log("empty");
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
});