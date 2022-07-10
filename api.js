

const express = require("express");

const router = express.Router();

router.get("/get-photos",async(req,res)=>{
    try{

        const photos ={
            photos:[
                //from here
        //         {
        //         id: 12441544,

        //     src:{
        //         original:"https://images.pexels.com/photos/12772076/pexels-photo-12772076.jpeg?auto=compress&cs=tinysrgb&h=350",
        //         medium:"https://images.pexels.com/photos/12772076/pexels-photo-12772076.jpeg?auto=compress&cs=tinysrgb&h=350"

        //     }
        // },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773999/pexels-photo-12773999.jpeg",
            medium:"https://images.pexels.com/photos/12773999/pexels-photo-12773999.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773998/pexels-photo-12773998.jpeg",
            medium:"https://images.pexels.com/photos/12773998/pexels-photo-12773998.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773997/pexels-photo-12773997.jpeg",
            medium:"https://images.pexels.com/photos/12773997/pexels-photo-12773997.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773995/pexels-photo-12773995.jpeg",
            medium:"https://images.pexels.com/photos/12773995/pexels-photo-12773995.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773996/pexels-photo-12773996.jpeg",
            medium:"https://images.pexels.com/photos/12773996/pexels-photo-12773996.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773994/pexels-photo-12773994.jpeg",
            medium:"https://images.pexels.com/photos/12773994/pexels-photo-12773994.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773992/pexels-photo-12773992.jpeg",
            medium:"https://images.pexels.com/photos/12773992/pexels-photo-12773992.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773993/pexels-photo-12773993.jpeg",
            medium:"https://images.pexels.com/photos/12773993/pexels-photo-12773993.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773991/pexels-photo-12773991.jpeg",
            medium:"https://images.pexels.com/photos/12773991/pexels-photo-12773991.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773989/pexels-photo-12773989.jpeg",
            medium:"https://images.pexels.com/photos/12773989/pexels-photo-12773989.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773990/pexels-photo-12773990.jpeg",
            medium:"https://images.pexels.com/photos/12773990/pexels-photo-12773990.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773988/pexels-photo-12773988.jpeg",
            medium:"https://images.pexels.com/photos/12773988/pexels-photo-12773988.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12773988/pexels-photo-12773988.jpeg",
            medium:"https://images.pexels.com/photos/12773988/pexels-photo-12773988.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
        
    

        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12772651/pexels-photo-12772651.png",
            medium:"https://images.pexels.com/photos/12772651/pexels-photo-12772651.png?auto=compress&cs=tinysrgb&h=350"

        }
    },
        {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12772650/pexels-photo-12772650.png",
            medium:"https://images.pexels.com/photos/12772650/pexels-photo-12772650.png?auto=compress&cs=tinysrgb&h=350"

        }
    },

    {
        id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773585/pexels-photo-12773585.png",
        medium:"https://images.pexels.com/photos/12773585/pexels-photo-12773585.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
        id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773584/pexels-photo-12773584.png",
        medium:"https://images.pexels.com/photos/12773584/pexels-photo-12773584.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
        id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773583/pexels-photo-12773583.png",
        medium:"https://images.pexels.com/photos/12773583/pexels-photo-12773583.png?auto=compress&cs=tinysrgb&h=350"

    }
},


    {
        id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773580/pexels-photo-12773580.png",
        medium:"https://images.pexels.com/photos/12773580/pexels-photo-12773580.png?auto=compress&cs=tinysrgb&h=350"

    }
},


    {
        id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773582/pexels-photo-12773582.png",
        medium:"https://images.pexels.com/photos/12773582/pexels-photo-12773582.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
        id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773581/pexels-photo-12773581.png",
        medium:"https://images.pexels.com/photos/12773581/pexels-photo-12773581.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
        id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773579/pexels-photo-12773579.png",
        medium:"https://images.pexels.com/photos/12773579/pexels-photo-12773579.png?auto=compress&cs=tinysrgb&h=350"

    }
},


    {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12774188/pexels-photo-12774188.jpeg",
            medium:"https://images.pexels.com/photos/12774188/pexels-photo-12774188.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
    {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12774187/pexels-photo-12774187.jpeg",
            medium:"https://images.pexels.com/photos/12774187/pexels-photo-12774187.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
    {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12774186/pexels-photo-12774186.jpeg",
            medium:"https://images.pexels.com/photos/12774186/pexels-photo-12774186.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
    {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12774184/pexels-photo-12774184.jpeg",
            medium:"https://images.pexels.com/photos/12774184/pexels-photo-12774184.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
    {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12774183/pexels-photo-12774183.jpeg",
            medium:"https://images.pexels.com/photos/12774183/pexels-photo-12774183.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },
    {
            id: 12441544,

        src:{
            original:"https://images.pexels.com/photos/12774185/pexels-photo-12774185.jpeg",
            medium:"https://images.pexels.com/photos/12774185/pexels-photo-12774185.jpeg?auto=compress&cs=tinysrgb&h=350"

        }
    },

    {
        id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773577/pexels-photo-12773577.png",
        medium:"https://images.pexels.com/photos/12773577/pexels-photo-12773577.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773578/pexels-photo-12773578.png",
        medium:"https://images.pexels.com/photos/12773578/pexels-photo-12773578.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773576/pexels-photo-12773576.png",
        medium:"https://images.pexels.com/photos/12773576/pexels-photo-12773576.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773574/pexels-photo-12773574.png",
        medium:"https://images.pexels.com/photos/12773574/pexels-photo-12773574.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773575/pexels-photo-12773575.png",
        medium:"https://images.pexels.com/photos/12773575/pexels-photo-12773575.png?auto=compress&cs=tinysrgb&h=350"

    }
},

    {
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773573/pexels-photo-12773573.png",
        medium:"https://images.pexels.com/photos/12773573/pexels-photo-12773573.png?auto=compress&cs=tinysrgb&h=350"

    }
},

{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773571/pexels-photo-12773571.png",
        medium:"https://images.pexels.com/photos/12773571/pexels-photo-12773571.png?auto=compress&cs=tinysrgb&h=350"

    }
},

{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773572/pexels-photo-12773572.png",
        medium:"https://images.pexels.com/photos/12773572/pexels-photo-12773572.png?auto=compress&cs=tinysrgb&h=350"

    }
},

{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773570/pexels-photo-12773570.png",
        medium:"https://images.pexels.com/photos/12773570/pexels-photo-12773570.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12772650/pexels-photo-12772650.png",
        medium:"https://images.pexels.com/photos/12772650/pexels-photo-12772650.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12772663/pexels-photo-12772663.png",
        medium:"https://images.pexels.com/photos/12772663/pexels-photo-12772663.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12772661/pexels-photo-12772661.png",
        medium:"https://images.pexels.com/photos/12772661/pexels-photo-12772661.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12772662/pexels-photo-12772662.png",
        medium:"https://images.pexels.com/photos/12772662/pexels-photo-12772662.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12772660/pexels-photo-12772660.png",
        medium:"https://images.pexels.com/photos/12772660/pexels-photo-12772660.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12772658/pexels-photo-12772658.png",
        medium:"https://images.pexels.com/photos/12772658/pexels-photo-12772658.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12772659/pexels-photo-12772659.png",
        medium:"https://images.pexels.com/photos/12772659/pexels-photo-12772659.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12772609/pexels-photo-12772609.png",
        medium:"https://images.pexels.com/photos/12772609/pexels-photo-12772609.png?auto=compress&cs=tinysrgb&h=350"

    }
},
{
    id: 12441544,

    src:{
        original:"https://images.pexels.com/photos/12773839/pexels-photo-12773839.png",
        medium:"https://images.pexels.com/photos/12773839/pexels-photo-12773839.png?auto=compress&cs=tinysrgb&h=350"

    }
},
        
        
    
    ]

        }
        res.json(photos);
    }catch{

    }
})

module.exports=router