let customers =[
    {"id":1,"name":"abrham","age":21},
    {"id":2,"name":"bereket","age":16},
    {"id":3,"name":"dagem","age":12},
    {"id":4,"name":"amen","age":7}
];

function getAllCustomer(){
    return customers;
};

function getCustomerById(id){
    const customer = customers.filter(cust => cust.id === id);
    return customer;
};

function createCustomer(customer){
    customers.push(customer);
    return customer;
};

function deleteCustomer(id){
     customers = customers.filter(cust => cust.id !== id);
    return;
}

module.exports = {
    getAllCustomer,
    getCustomerById,
    createCustomer,
    deleteCustomer
};