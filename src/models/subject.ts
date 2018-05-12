export class Subject{
    public ab1?: number;
    public ab2?: number;
    public reav?: number;
    public final?: number;
    public nota?: number;
    public name: string;
    public code?: string;
    public professor?: string;
    public period?: string;
    public color?: string;

    public isApproved():boolean{
        if(!this.ab1 || !this.ab2) return false;
        if(this.average() > 7) return true;
        
        return false; 
    }

    public average():number{
        if(!this.ab1 || !this.ab2) return 0;
        if(this.nota) return this.nota;
        return (this.ab1+this.ab2)/2
    }

}