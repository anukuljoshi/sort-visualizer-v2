import React from 'react';
import { useSelector } from 'react-redux';

const BarGraphItem = (props) => {
    const { value, size } = props;
    const height = value;
    const width = 100/size;

    const styles = {
        height: height + '%',
        width: width + '%',
        backgroundColor: '#11ab7f'
    }
    return (
        <div className="bar-graph-item mx-1 text-center" style={styles}>{value}</div>
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
            <div className="bg-gray-800 flex h-5/6 w-5/6 mt-5 mx-auto px-3">
                { arrayDivList }
            </div>
        </>
    );
}

export default Visualizer;
