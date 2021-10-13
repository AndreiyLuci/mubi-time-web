import Loader from "react-loader-spinner";
import { useAuth } from "../../hooks/useAuth";
import './UserProfile.css'

export default function UserProfile() {
  
  const { user } = useAuth();
  console.log(user)
  if (!user) {
  
    return (
      <div>
        <Loader
          type="MutatingDots"
          color="rgb(255, 222, 89)"
          secondaryColor="rgb(54, 54, 54)"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
 else if (user) {

   return(
     <div className='UserProfile'>
       <div className='profile-cover'>       
         <img src={user.avatar} alt=''/>
         <h1>{user.username}</h1>
         <p><i>Member since {new Date(user.createdAt).getFullYear()}</i></p>
         <p>{user.favMovies[0]}</p>
       </div>
       <div className='profile-favs'>
  
       </div>
     </div>
   )
 }

}