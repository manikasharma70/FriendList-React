import Classes from '../components/FriendName.module.css';
import bin from '../image/bin.png';
import { useState } from 'react';
import star from '../image/star.png';
import staractive from '../image/staractive.png';

const FriendName = (props) => {
    const inputData = props.data;
    const [fav,setFav] = useState(inputData.favourites);

    const addToFavsHandler = () =>{
        setFav(prevState => !prevState);
    }

    const deleteFriendHandlder = () => {
        props.changeHandler(inputData.id);
    }

    if(fav == true){
        var FavIcon = staractive;
    }else{
        var FavIcon = star;
    }

    return(
        <div className={Classes.FriendList}>
                <span key={inputData.fname}><b>{`${inputData.fname} ${inputData.lname}`}</b> is your friend</span>
                <img onClick={addToFavsHandler} className={Classes.Applogo} src={FavIcon}></img>
                {/* <button onClick={deleteFriendHandlder}>Delete</button> */}
                <img onClick={deleteFriendHandlder} className={Classes.Applogo} src={bin}></img>
        </div>
    )
}

export default FriendName;