class Queue<T>{
    private tableElement: T[] ;

    constructor(table : T[]){
        this.tableElement = table;

    }


    enqueue(element: T):number  {
        return this.tableElement.push(element);
    }

}


