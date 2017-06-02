export class Fruit{
    id:number;
    name:String;
    size:number;
    color:String;
    stockAmt:number;

    constructor(id:number, n:String,s:number,c:String){
        this.id=id;
        this.name=n;
        this.size=s;
        this.color=c;
        this.stockAmt = 0;
    }
}