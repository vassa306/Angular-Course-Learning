

export const USERS: any = [

    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
    },
    {
        id: 2,
        firstname: "Jane",
        lastname: "Smith"
    },

    {
        id: 3,
        firstname: "Alice",
        lastname: "Johnson"
    },

    {
        id: 4,
        firstname: "Bob",
        lastname: "Brown"
    },
    {
        id: 5,
        firstname: "Charlie",
        lastname: "Davis"
    },
    {
        id: 6,
        firstname: "Diana",
        lastname: "Evans"
    },
    {
        id: 7,
        firstname: "Ethan",
        lastname: "Foster"
    },
    {
        id: 8,
        firstname: "Fiona",
        lastname: "Garcia"
    },
    {
        id: 9,
        firstname: "George",
        lastname: "Harris"
    },
    {
        id: 10,
        firstname: "Hannah",
        lastname: "Iverson"
    }

];


export function findUserById(userId:number) {
    return USERS.find((user: any) => user.id === userId);
}