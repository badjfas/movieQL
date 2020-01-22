//Query를 resolve 
const jin= {
    name:"배진우",
    age:27,
    gender:"male"
};

const  resolvers= {
    Query:{
        person: () => jin
    }
    
};

export default resolvers;