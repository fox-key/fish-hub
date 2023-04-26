
type Factory<T> = T|number|string;

const foo:Factory<boolean> = true;

type FactoryWithBool = Factory<boolean>;

const foo1:FactoryWithBool = true;

type Factory1<NewType> = NewType|number|string;

type MaybeNull<T>= T|null;

function process1(input:MaybeNull<{handler:()=>{}}>){
    input?.handler()
}

type MaybeArray<T> = T| T[]

function ensureArray<T>(input:MaybeArray<T>):T[]{
    return Array.isArray(input)?input:[input]
}

interface NameStruct{
    name:string;
}

interface AgeStruct{
    age:number;
}

type ProfileStruct = NameStruct & AgeStruct;

const profile:ProfileStruct = {
    name:'erer',
    age:18
}

type Struct1 = {
    primitiveProp:string;
    objectProp:{
        age:number;
    }
}

type Struct2={
    primitiveProp:number;
    objectProp:{
        name:string;
    }
}

type Composed = Struct1 & Struct2;

type PrimitivePropType = Composed['primitiveProp'] // never
type ObjectProp = Composed['objectProp'] //{name:string;age:number}


type UnionIntersection1 = (1 | 2 | 3) & (1 | 2); // 1 | 2
type UnionIntersection2 = (string | number | symbol) & string; // string

type Stringify<T> = {
    [k in keyof T]:string;
}

interface Foo {
    prop1:string;
    prop2:number;
    prop3:boolean;
    prop4:()=>void;
}

type StringifiedFoo = Stringify<Foo>;

type Clone<T> = {
    [k in keyof T]:T[k];
}




const str = 'fengkai';
const obj = {
    name:'fengkai'
}
const nullVar = null;
const undefinedVar = undefined;
const func = (input:string)=>input.length>10;

type Str = typeof str;
type Obj = typeof obj;
type Null = typeof nullVar;
type Undefined = typeof undefinedVar;
type Func = typeof func;


const fn1 = (input:string)=>{
    return input.length>10;
}

const fn2:typeof func = (name:string){
    return name==='fengkai';
}

type FuncReturnType = ReturnType<typeof func>;



// function foo3(input:string|number){
//     if(type)
// }