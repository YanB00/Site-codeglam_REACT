import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import styles from '../../Main.module.css';

const MainLayout = () => {
    return (
        <div className={styles.main}>
            <Header />
            <div className={styles.content}>
                <Outlet /> 
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;