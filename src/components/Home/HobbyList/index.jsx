import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbyList : PropTypes.array,
    activeId : PropTypes.number,
    onHobbyClick: PropTypes.func
};
HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null
}
 
function HobbyList(props) {
    const { hobbyList,activeId , onHobbyClick } = props;
    //console.log(activeId)
    const  handleClick = (hobby) =>{
        if(!onHobbyClick){return}
        onHobbyClick(hobby)
    }
    return (
        <div>
            <ul>
                {
                    hobbyList.map( (item,index) =>  ( <li onClick={() => handleClick(item)} 
                        key={index}
                        className={ item.id === activeId  ? 'active' : ''}
                        >{item.title}</li> )
                    )    
                }
            </ul>
        </div>
    );
}

export default HobbyList;