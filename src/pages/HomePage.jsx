import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux'
import { addNewHobby, setActiveHobby } from '../actions/hobby'
// import  casual from 'casual'
import HobbyList from '../components/Home/HobbyList/index'

HomePage.propTypes = {
    
};

function HomePage(props) {
    ///strict comparison  mỗi lần render đều lay state ra so sánh === 
    const hobbyList =  useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
   
    const dispatch  = useDispatch();
    
    const randomNumber =  ()  => {
        return 1000 + Math.trunc((Math.random() * 9000));
    }
   
    const handleAddHobbyList = () => {
        //random a hobby object : id + title
        const newId = randomNumber();

        const newHobby = {
            id: newId,
            title : `Hobby ${newId}`
        }
         //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action)
    }
    const handleHobbyClick = (hobby) => {
        
        const action = setActiveHobby(hobby);
        console.log(action)
        dispatch(action)
    }
    return (
        <div>
            <h1>This is redux</h1>
            <button onClick={handleAddHobbyList}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList} 
            activeId={activeId} 
            onHobbyClick={handleHobbyClick} />
             
        </div>
    );
}

export default HomePage;