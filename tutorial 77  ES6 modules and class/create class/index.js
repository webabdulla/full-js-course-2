class student{
    constructor(id,name) {
       this.id =id ;
       this.name = name ;
    }

set studentName(name){
    this.name=name;
};

get studentInfo(){
    return this.id + "" + this.name;
}

}

var s1 =new student(101,"Miraj");
console.log(s1.id);
console.log(s1.name);

s1.studentName = "lalala";
console.log(s1.name);

var s2 = new student(101,"Miraj");
console.log(s2.studentInfo);