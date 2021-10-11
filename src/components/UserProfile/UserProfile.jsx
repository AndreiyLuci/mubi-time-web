import Loader from "react-loader-spinner";
import { useAuth } from "../../hooks/useAuth";

export default function UserProfile() {
  
  const { user } = useAuth();

  // if (!user.avatar) {
  //   return (
  //     <div>
  //       <Loader
  //         type="MutatingDots"
  //         color="rgb(255, 222, 89)"
  //         secondaryColor="rgb(54, 54, 54)"
  //         height={100}
  //         width={100}
  //         timeout={3000} //3 secs
  //       />
  //     </div>
  //   );
  // }

  return(
    <div className='UserProfile'>
      <div className='profile-cover'>
      hola
        <img src={user.avatar} alt=''/>
      </div>
      <div className='profile-favs'>

      </div>
    </div>
  )
}