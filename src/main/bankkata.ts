

interface IAccountService{
    deposit(amount:number):void;
    withdraw(amount:number):void;
    printStatement():void;
}

export interface IPrinter {
    print(row:string):void
}
export interface IDepositService {
    deposit(date:string, anount:number):void
}

export class AccountService implements IAccountService {

    balance: number;
    rows:string;
    printer: IPrinter;

    constructor(printer: IPrinter){
        this.balance = 0;
        this.printer=printer;
        this.rows = "Date||Amount||Balance";
    }

    public deposit(amount: number): void {
       this.balance = this.balance + amount; 
       this.rows += `+14/09/2021||${amount}||${this.balance}`
 
    }

    public withdraw(amount: number): void {
       this.balance = this.balance - amount;     
    }

    public printStatement(): void {
        this.printer.print(this.rows)        
    }
}