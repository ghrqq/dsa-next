import React, {useState} from 'react'
import UserDetails from '../../components/ManagerComponents/UserDetails';
import Layout from "../../themes/Layout"
import users from "../../user.json"

export default function customers({auth}) {
    const [isExpand, setisExpand] = useState("");

    const detailProvider = (val) => {
if(val === isExpand){
    setisExpand("");
    return;
}
setisExpand(val);

    }



    return (
        <Layout>
            <div className="w-5/6 mx-auto flex flex-col sm:flex-row  justify-evenly items-center cursor-pointer border bg-gray-600 no-print">
                <div className="w-1/6">ID#</div>
                <div className="w-1/6">Name</div>
                <div className="w-1/6">Surname</div>
                <div className="w-1/6">Sale Rate</div>
                <div className="w-1/6">Agent</div>
                <div className="w-1/6">Details</div>
            </div>
            {/* TODO: Admin options will be added */}

            {users.map(user => (


                <div >

            
            <div className="w-5/6 mx-auto flex flex-col sm:flex-row  justify-evenly items-center cursor-pointer border bg-gray-400 no-print">
                <div className="w-1/6">{user.id}</div>
                <div className="w-1/6">{user.name}</div>
                <div className="w-1/6">{user.surname}</div>
                <div className="w-1/6">{user.sale}</div>
                <div className="w-1/6">{user.agent}</div>
                <div className="w-1/6" onClick={() => detailProvider(user.id)}>{isExpand === user.id ? "-" : "+"}</div>
                
            </div>

<div className={isExpand === user.id ? "null" : "hidden"}>

          {isExpand === user.id ? <UserDetails user={user.id} /> : null}

</div>
            </div>

                ))}


{/* TODO: User Addresses will be add here */}
        </Layout>
    )
}
