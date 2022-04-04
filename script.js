const app = new Vue({
    el: "#vue-app",
    data: {
        emails: [],
        max: 10
    },
    mounted() {
        let result;
        const array = [];
        for (let i = 0; i < this.max; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                result = resp.data;
                array.push(result.response);
                this.emails.push(result.response);
            });
        };
        console.log(array);
        console.log(array.length);
    }
});


