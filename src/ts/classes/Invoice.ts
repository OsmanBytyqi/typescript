// classes

import { formatter } from "../interfaces/formatter.js";

 
   export class Invoice implements formatter{
  
  constructor(
    readonly client: string, 
    private details: string, 
    public amount: number,
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
