import express from 'express';

const app = express();

type Params2 = {
    a: number,
    b: number
}

interface Prams {
    a: number,
    b: number
}

const greeting: string = 'Hello';
const arr: number[] = [1, 2, 5, 7];


// ? can be use to make a parameter optional
const add = (a: number, b?: number): number => {
    // ! can be use to ignore undefined (Highly Not Recommended) or can use "// @ts-ignore" to ignore it.
    // or you can cast it to a number as " return a + b; "
    return a + b!;
};

// ": any" can be use for escaping type errors.
app.get('/', (req: any, res) => {
    req.name = 'hansa'; // Type error is rice in this line because there is no type define as req.name.
    add(1)
    res.status(200).json({ message: 'Done' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is UP in port ${PORT}`);
});
