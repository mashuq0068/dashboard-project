
import Image from 'next/image';
import user1 from '../../../public/assets/images/user1.png'
import user2 from '../../../public/assets/images/user2.png'
import user4 from '../../../public/assets/images/user4.png'
import './MostActive.scss'
const MostActive = () => {
    const users =
        [
            {
                image : user1,
                name : "David Elson",
                email : "elsonsf782@gmail.com"
            },
            {
                image : user2,
                name : "Kathy Pacheco",
                email : "pacheco54@gmail.com"
            },
            {
                image : user4,
                name : "Patricia Sanders",
                email : "sanders856@gmail.com"
            }
        ]
    return (
        <div className='real-container'>
            <div className='text-part'>
                <h3 className='text-most'>Most active users</h3>
                <p className='text-red'>see more</p>
            </div>
{users?.map((user , i) => 
<div className='active-container' key={i}>
<div style={{position:'relative'}}>
<div className="active-indicator"></div>
    <Image src={user?.image} height='auto' width='auto' alt='user-profile'/>
</div>
    <div>
        <p className='name'>{user?.name}</p>
        <p>{user?.email}</p>
    </div>
</div>
    )}
    
        </div>
    );
};

export default MostActive;