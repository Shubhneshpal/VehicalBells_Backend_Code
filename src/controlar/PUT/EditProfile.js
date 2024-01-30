const RegistetSchema = require("../../modals/register")

const updateRegisterControler =async (req,res)=>{
    const {id} = req.params;

    try{
        const result = await RegistetSchema.findByIdAndUpdate(id, {
            $set: {
                name: req.body.name,
                lname: req.body.lname,
                Cname: req.body.Cname,
                email: req.body.email,
                password: req.body.password,
                updatedDate: Date.now(),
            },
        });
        if(result){
            res.json({massage: "Profile updated successfully"})
        }else{
            res.status(404).json({ error: 'Profile not found' });
        }
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}