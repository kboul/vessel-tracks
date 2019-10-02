import React from 'react';
import loader from '../assets/loader.gif';
import styles from '../styles/Spinner.module.sass';

const Spinner = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt="loader" />
        </div>
    );
};

export default Spinner;
