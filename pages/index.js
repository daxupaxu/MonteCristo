import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Main from '../components/Main';
import fetch from 'isomorphic-unfetch';

const index = props => {

    return (
        <BaseLayout>
            <Main  props={props.data}/>
        </BaseLayout>
    )
}

index.getInitialProps = async () => {
    const res = await fetch('http://localhost:1337/homes');
    const data = await res.json();
    return {
        data
    }
};

export default index