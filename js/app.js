console.log(Vue)

const estudiantes = [{nombre:"Dennisse", apellido:"Andrade"},
                      {nombre:"Diego", apellido:"Rivas"},
                      {nombre:"Isabel", apellido:"Marin"},
                      {nombre:"Guillermo", apellido:"Valencia"},
                      {nombre:"Taehyung", apellido:"Kim"}
                    ];


const app = Vue.createApp({
    //template: `
    //<h1> Hola Mundo desde Vue.JS </h1>
    //<p>{{2+2}}</p>
    //<p>{{[1,2,3,4]}}</p>
    //<p>{{false?'True':'False'}}</p>
    //`

    data(){
        return{
            mensaje: "Hola mundo propiedad reactiva",
            valor: 7,
            lista: estudiantes,

            nombre: null,
            apellido:null,
        }
    },

    methods:{
        cambiarTexto(){
            this.mensaje ="Texto cambiado";

        },
        sumar(){
            this.valor = this.valor+5;
        },

        agregar(){

            console.log(this.nombre)
            console.log(this.apellido)
            const nuevo = {nombre:this.nombre,
                             apellido:this.apellido
                            };
           this.lista.unshift(nuevo); 
           this.resetear();
        },

        resetear(){
            this.nombre = null;
            this.apellido = null;
        },

        agregar2({charCode}){ //ingresa los eventos
            console.log(charCode)

            if(charCode !== 13) return;
            if(this.nombre!==null&&this.apellido!==null) {
                this.agregar();
            }


        },
    }
});

app.mount('#myApp');   //puede ser cualquier nombre pero que sea relacionado con el programa

