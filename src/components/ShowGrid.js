import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PropagateLoader } from 'react-spinners';

const ShowGrid = () => {

   

        const { data: users = [], isLoading } = useQuery({
            queryKey: ['booksCategories'],
            queryFn: () => fetch('https://reqres.in/api/users?page=1')
                .then(res => res.json())
        });

        const datas = users.data
        console.log(datas)

        
    
    return (
        <div className='  flex justify-center items-center align-middle'>
            {
                isLoading ?
                <div>
                    <div className=' h-[800px] flex justify-center items-center align-middle'>
                        <PropagateLoader
                            color="#0a7b64"
                            size={30}></PropagateLoader>
                    </div>

                </div> 
                :

                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10 '>
                    {
                    datas.map(user=><div key={user.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={user.avatar} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{user.first_name} {user.last_name}</h2>
                      
                      <p>{user.email}</p>
                      
                    </div>
                  </div>)
                }
                </div>
            }
            
        </div>
    );
};

export default ShowGrid;