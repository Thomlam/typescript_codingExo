import axios from "axios";

interface userDB{
    id: number;
    name: string ;
    username: string;
    email: string;
}

export async function getAPI(id:number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.data;
}
export async function getUserSummary(id: number) {
  const test:userDB = await getAPI(id)
  return test.name +test.username + "("+test.username+")"+ "-"+ test.email;
}
async function Init() {
    await getUserSummary(1);
}

Init()
