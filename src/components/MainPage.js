import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

import './MainPage.css';

class MainPage extends React.Component{
    componentDidMount() {
        console.log(process.env.NODE_ENV.REACT_APP_SAY_HI)
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase())
        })
    }

    render() {
        const { onSearchChange, robots, isPending } = this.props;
        
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    { isPending ? <h1>Loading</h1> :
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots(robots)} />
                        </ErrorBoundry>
                    }
                </Scroll>
            </div>
        )
    }
}

export default MainPage;