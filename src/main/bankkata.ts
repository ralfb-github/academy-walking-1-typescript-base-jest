interface IAccountService{
    deposit(amount:number):void;
    withdraw(amount:number):void;
    printStatement():void;
}

export interface IPrinter {
    print(row:string):void
}

export class AccountService implements IAccountService {

    balance: number;
    printer: IPrinter;

    constructor(printer: IPrinter){
        this.balance = 0;
        this.printer = printer;
    }

    public deposit(amount: number): void {
       this.balance = this.balance + amount;  
    }

    public withdraw(amount: number): void {
       this.balance = this.balance - amount;     
    }

    public printStatement(): void {
        this.printer.print("Date||Amount||Balance")        
    }
     
}