console.log(Vue)

const app = Vue.createApp({
    template: `<h1> Hola Mundo desde Vue.JS </h1>

    <p>{{2+2}}</p>
    <p>{{[1,2,3,4]}}</p>
    <p>{{false?'True':'False'}}</p>
    

    `
    
});

app.mount('#myApp');   //puede ser cualquier nombre pero que sea relacionado con el programa

