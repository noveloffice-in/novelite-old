export default function useFetchUserDetails(details) {
    if(details == "email"){
        let userData = localStorage.getItem('user');
        userData = JSON.parse(userData);
        if( userData ){
            return userData.email;
        }
        return "None";
    } else if (details == "name"){
        let userData = localStorage.getItem('user');
        userData = JSON.parse(userData);
        if( userData ){
            return userData.name;
        }
        return "None";
    }
  return "None";
}
