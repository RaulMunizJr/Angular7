
export interface userData{
    name:string;
    email:string;
    password:string;
}

export class userGen implements userData {
    name: string="";
    email: string="";
    password: string = "";


userName(){
    return 'This is a string';
}

userEmail(){
    return `This
    is
    a
    string
    Template`;
    }

userPassword(){
    var args: number[]=[0,1,2];
    (<any>this.foo)(...args);
    }
    foo(x:number, y:number, z:number){
        console.log(x,y,z);
    }




}
