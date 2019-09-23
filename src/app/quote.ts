export class Quote {
  showDescription: boolean;
  constructor(public id: number,public quote: string,public name: string, public completeDate: Date){
    this.showDescription=false;
  }
}
