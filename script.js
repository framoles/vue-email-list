const app = new Vue({
    el: "#vue-app",
    data: {
        emails: []
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                result = resp.data
                this.emails.push(result.response);
            });
        }
    }
});


