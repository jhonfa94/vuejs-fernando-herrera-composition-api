
const {createApp, ref} = Vue;

const app = createApp({
    // template: `
    //     <h1>{{ message }}</h1>
    //     <p>{{ author }}</p>
    // `,
    setup(){
        console.log('septup')

        const message = ref("I'm Batman");
        const author = ref("Batman");


        const changeQuote = ()=>{
            message.value = "Hola soy Goku";
            author.value = "Goku";
        }

        // setTimeout(() => {
        //     message.value = "Hola soy Goku";
        //     author.value = "Goku";
        // }, 2000);

        return {
            message, 
            author,
            changeQuote
        };
    }
})

app.mount('#app')