import React from 'react';


const AssignThree = (Component, data) =>{
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state={}
        }

        render() {
            return <Component />
        }

    }

}

export default AssignThree;