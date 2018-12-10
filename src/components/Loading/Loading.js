import React from 'react'
import { CircleLoader } from 'react-spinners';
import { css } from 'react-emotion';

const loading = (props) => {
    const style = css`
    display: block;
    margin: 0 auto 5rem auto;
    border-color: red;
`;
    return (
        <div className="container">
            <CircleLoader
                className={style}
                sizeUnit={"px"}
                size={200}
                color={'#123abc'}
                loading={props.loader}
            />
        </div>
    )
}

export default loading