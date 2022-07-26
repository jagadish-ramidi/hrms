import React, {useState} from 'react';

// router
import { withRouter } from 'react-router-dom';

// styling
import './Menu.css';

const Menu = props => {
    const [openMenu, setOpenMenu] = useState(false)
    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`)
        return classArr.join(' ')
    }

    // takes route string as parameter
    const pushToRoute = route => {
        props.history.push(route)
        setOpenMenu(false)
    }

    return (
        <div className="Menu">
            <div className={"m-item m-logo"}
                onClick={() => setOpenMenu(!openMenu)}>
                Human Resources
            </div>
            <div className={setClassNames(1)}
                onClick={() => pushToRoute("/")}>
                Benefits
            </div>
            <div className={setClassNames(2)}
                onClick={() => pushToRoute("/")}>
                Recruit to Hire
            </div>
            <div className={setClassNames(3)}
                onClick={() => pushToRoute("/resource")}>
                 Resource Management
            </div>
            <div className={setClassNames(4)}
                onClick={() => pushToRoute("/")}>
                Offer Letter
            </div>
        </div>
  );
}

export default withRouter(Menu);