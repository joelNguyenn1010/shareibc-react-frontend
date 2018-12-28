import React from 'react'
import { CircleLoader, ClipLoader } from 'react-spinners';
import { css } from 'react-emotion';

const loading = (props) => {
    const style = css`
    display: block;
    margin: 0 auto 5rem auto;
`;
    return (
        <React.Fragment>
            <CircleLoader   
                className={style}
                sizeUnit={"px"}
                size={200}
                color={'#123abc'}
                loading={props.loader}
            />
            </React.Fragment>
    )
}

export default loading