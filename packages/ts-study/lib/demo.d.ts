type Factory<T> = T | number | string;
declare const foo: Factory<boolean>;
type FactoryWithBool = Factory<boolean>;
declare const foo1: FactoryWithBool;
type Factory1<NewType> = NewType | number | string;
type MaybeNull<T> = T | null;
declare function process1(input: MaybeNull<{
    handler: () => {};
}>): void;
type MaybeArray<T> = T | T[];
declare function ensureArray<T>(input: MaybeArray<T>): T[];
interface NameStruct {
    name: string;
}
interface AgeStruct {
    age: number;
}
type ProfileStruct = NameStruct & AgeStruct;
declare const profile: ProfileStruct;
type Struct1 = {
    primitiveProp: string;
    objectProp: {
        age: number;
    };
};
type Struct2 = {
    primitiveProp: number;
    objectProp: {
        name: string;
    };
};
type Composed = Struct1 & Struct2;
type PrimitivePropType = Composed['primitiveProp'];
type ObjectProp = Composed['objectProp'];
type UnionIntersection1 = (1 | 2 | 3) & (1 | 2);
type UnionIntersection2 = (string | number | symbol) & string;
type Stringify<T> = {
    [k in keyof T]: string;
};
interface Foo {
    prop1: string;
    prop2: number;
    prop3: boolean;
    prop4: () => void;
}
type StringifiedFoo = Stringify<Foo>;
type Clone<T> = {
    [k in keyof T]: T[k];
};
declare const str = "fengkai";
declare const obj: {
    name: string;
};
declare const nullVar: null;
declare const undefinedVar: undefined;
declare const func: (input: string) => boolean;
type Str = typeof str;
type Obj = typeof obj;
type Null = typeof nullVar;
type Undefined = typeof undefinedVar;
type Func = typeof func;
declare const fn1: (input: string) => boolean;
declare const fn2: typeof func;
type FuncReturnType = ReturnType<typeof func>;
declare function foo3(input: string | number): void;
