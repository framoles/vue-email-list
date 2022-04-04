const app = new Vue({
    el: "#vue-app",
    data: {
        emails: [],
        max: 10
    },
    mounted() {
        let result;
        for (let i = 0; i < this.max; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                result = resp.data;
                this.emails.push(result.response);
            });
        }
    }

});
