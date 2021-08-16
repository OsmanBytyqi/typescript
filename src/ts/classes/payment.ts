import { formatter } from "../interfaces/formatter.js";


   export class Payments implements formatter {
  
  constructor(
    readonly recepient: string, 
    private details: string, 
    public amount: number,
  ){}

  format() {
    return `${this.recepient} owes £${this.amount} for ${this.details}`;
  }
}
