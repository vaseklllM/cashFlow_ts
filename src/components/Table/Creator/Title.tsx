import React from 'react';
import { IValut } from '../../../interfaces';

interface IProps {
    title: string
    fullPrice: IValut[]
}

const Title = (props: IProps) => {
    const {title, fullPrice} = props
    return (
        <div>
            Title
        </div>
    );
}

export default Title;
