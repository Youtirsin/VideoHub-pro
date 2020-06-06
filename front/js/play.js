var vm = new Vue({
    el: "#app",
    data: {
        source: ""
    },
    methods: {

    },
    mounted() {
        var search = window.location.search;
        var source = getSearchString('source', search);
        console.log(source); 
        this.source='/'+source;
    }
});

function getSearchString(key, Url) {
    var str = Url;
    str = str.substring(1, str.length);
    var arr = str.split("&");
    var obj = new Object();
    for (var i = 0; i < arr.length; i++) {
        var tmp_arr = arr[i].split("=");
        obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
    }
    return obj[key];
}