import React from 'react';
import { useSelector } from 'react-redux';

const BarGraphItem = (props) => {
    const { value, size } = props;
    let height = value;
    let width = 100/size;

    const styles = {
        height: height + '%',
        width: (width<1 ? 1 : width) + '%',
        backgroundColor: '#11ab7f'
    }
    return (
        <div className="bar-graph-item mx-1 text-center lg:text-base text-xs" style={styles}></div>
    )
}


function Visualizer(props) {
    const array = useSelector(state => state.array.values);
    const size = useSelector(state => state.array.size);

    const arrayDivList = array.map((val, index) => {
        return (
            <BarGraphItem 
                value={val}
                size={size}
                key={index}
            >
            </BarGraphItem>
        );
    });

    return (
        <>
            <div className="bg-gray-800 flex lg:h-4/6 h-1/2 lg:w-5/6 w-11/12 mt-5 mx-auto">
                { arrayDivList }
            </div>
        </>
    );
}

export default Visualizer;
