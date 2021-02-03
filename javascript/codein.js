

let app = new Vue({
    el: '#app',
    data: {
        base_url: null,
    },
    methods: {
        // loadRequester: function() {
        //     axios({
        //         method: 'get',
        //         url: this.base_url + '/firmware/requesters',
        //     }).then(response => {
        //         this.requesters = JSON.parse(response.data)
        //         console.log(typeof(this.requesters))
        //     })
        // }, 
    },
    created: function() {
        //this.loadRequester()
    }
})