import { useState, useEffect } from "react";
import FriendName from './FriendName';
import Classes from '../App.module.css';
import sortIcon from '../image/sortIcon.png';
import people from '../data/dummy-data.json';

const NameList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [deletedVal, setDeletedValue] = useState(0);
    const [sortValue, setSortValue] = useState(false);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const results = people.filter((friend) => {
            return Object.values(friend).join("").toLowerCase().includes(searchTerm.toLowerCase());
        })
        setSearchResults(results);
    }, [searchTerm]);

    useEffect(() => {
        setSearchResults(prevresults => {
            const results = prevresults.filter(friend => friend.id !== deletedVal);
            return results;
          });
    }, [deletedVal]);


    const deleteHandlder= (value) => {
        setDeletedValue(value);
    }


    const sortHandler = () => {
        setSortValue(prevVal => !prevVal);
        if(sortValue === true){
            setSearchResults(prevresults => {
                const results = prevresults.sort((a,b) =>  b.favourites-a.favourites);
                return results;
            });
        }else{
            setSearchResults(prevresults => {
                const results = prevresults.sort((a,b) =>  a.favourites-b.favourites);
                return results;
            });
        }
    }

    return (
        <div className={Classes.formControl}>
            <section className={Classes.SectionList}>
            <label>Friends List</label>  
            <input
                className={Classes.floatchild}
                type="text"
                placeholder="Enter your friend's name here"
                value={searchTerm}
                onChange={handleChange}
            />
            <img className={Classes.Applogo} src={sortIcon}onClick={sortHandler}/>
            {searchResults.map(item => (
                <FriendName key={item.id} data={item} changeHandler={deleteHandlder}></FriendName>
            ))}
            </section>
        </div>
      );
}

export default NameList;