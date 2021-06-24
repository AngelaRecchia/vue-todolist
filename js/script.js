/* 
Descrizione: Rifare l'esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista 
*/

const app = new Vue({
    el: "#app",
    data: {
        newTask: "",
        tasks: [
            {
                task: "Fare la spesa",
                subList: ["latte", "pasta", "caffè", "verdura"]
            },
            {
                task: "Pulire casa",
                subList: ["bagno", "lavare pavimento cucina"]
            },
            {
                task: "Comprare cibo gatti",
                subList: []
            },
            {
                task: "Chiamare Mike",
                subList: []
            }
        ],
        isShowingSub: false
    },
    methods: {
        addTask(){
            if (this.newTask) {
                const obj = {};
                obj.task = this.newTask;
                obj.subList = [];
                this.tasks.push(obj);
                this.newTask = "";
            }
        },
        removeTask(index){
            this.tasks.splice(index, 1);
        },
        showSubList(index){
            if (this.isShowingSub) {
                this.isShowingSub = false;
                document.getElementById("subLista").innerHTML = "";
            }
            else {
                for (elem of this.tasks[index].subList) {
                    document.getElementById("subLista").innerHTML += 
                    `
                        <li>${elem}</li>
                    `
                }
                this.isShowingSub = true;
            }
        }

    }
});