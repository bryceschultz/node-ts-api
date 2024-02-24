import User from "../../object/User";

const user: User = {
    id: 1,
    firstName: "Bryce",
    lastName: "Schultz"
}

const getUser = () : User => {
    return user;
}

export { getUser };