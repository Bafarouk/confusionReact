import React from 'react';
import {Media} from 'reactstrap';

const RenderLeader = (props) =>  {

    const leader = props.leaders.map((leader)=>{
        return(
            <Media key={leader.id} list>
                <Media tag="li">
                    <Media left className="mr-3 ">
                        <Media src={leader.image} alt="" />
                    </Media>
                    <Media body>
                        <Media heading>
                            {leader.name}
                            
                        </Media>
                        <Media body>
                        {leader.designation}
                        </Media>
                        <br/>
                        <Media body>
                        {leader.description}
                        </Media>
                    </Media>
                </Media>
            </Media>
        );
    })


    return(
        <div>
            {leader}
        </div>
    );

}

export default RenderLeader;

