const customer = require('./customerData');

exports.getCustomers = (req,res)=>{
     res.status(200).json(customer.getAllCustomer());
};

exports.getCustomer = (req,res)=>{
    const id = Number(req.params.id);
    const cust = customer.getCustomerById(id);

    if(!cust){
        return res.status(404).send("the customer is not found");
    };
    
    res.status(200).json(cust);

}

exports.createCustomer = (req,res)=>{
    const {name , age } = req.body;
    if(!name || typeof age !== 'number'|| age < 0){
        return res.status(400).send("invalid input!!!");
    };

    const newCust ={
        "id":Math.max(0, ...customer.getAllCustomer().map(c=>c.id)) +1,
        name,
        age
    };
    customer.createCustomer(newCust);
    res.status(201).json({
        "message":"created successfuly",
        "data":newCust
    })
};

exports.deleteCust =(req,res)=>{
    const id = Number(req.params.id);
    const cust = customer.getCustomerById(id);
    if(!cust){
        res.status(404).send("the customer is not found");
        return;
    };

    customer.deleteCustomer(id);
    res.status(200).send("successfuly deleted the data!!!");
}
