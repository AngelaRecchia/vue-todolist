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
                subList: ["latte", "pasta", "caffè", "verdura"],
                isShowingSub: false
            },
            {
                task: "Pulire casa",
                subList: ["bagno", "lavare pavimento cucina"],
                isShowingSub: false
            },
            {
                task: "Comprare cibo gatti",
                subList: [],
                isShowingSub: false
            },
            {
                task: "Chiamare Mike",
                subList: [],
                isShowingSub: false
            }
        ],
        subInput: ""
    },
    methods: {
        addTask() {
            if (this.newTask) {
                const obj = {};
                obj.task = this.newTask;
                obj.subList = [];
                this.tasks.push(obj);
                this.newTask = "";
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        showSubList(index) {
            if (this.tasks[index].isShowingSub) {
                this.tasks[index].isShowingSub = false;
            } else {
                this.tasks[index].isShowingSub = true;
                for (const elem in this.tasks) {
                    if(elem != index) this.tasks[elem].isShowingSub = false;
                    this.subInput = "";
                }
            }
        },
        addSub(index) {
            if (this.subInput) {
                this.tasks[index].subList.unshift(this.subInput);
                this.subInput = "";
            }
        },
        removeSub(index, subIndex) {
            this.tasks[index].subList.splice(subIndex, 1);
        }

    }
});