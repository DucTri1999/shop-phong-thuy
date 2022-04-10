import React, { Component } from 'react';
import HeaderMiddle from '../header/header.middle'
import HeaderTop from '../header/header.top'
import HeaderBottom from '../header/header.bottom'
import ContentHome from './content.home'

import './css/bootstrap.css';
import './css/jquery.smartmenus.bootstrap.css';
import './css/jquery.simpleLens.css';
import './css/slick.css';
import './css/nouislider.css';
import './css/sequence-theme.modern-slide-in.css';
import './css/theme-color/default-theme.css';
import './css/style.css';


const Home = ({ islogin, logout, category,
    publisher, book, totalpage, backPage,
    nextPage, setPage, page, sortType, setSortType,
    setRangeType, title, setTitle, setBranch, branch, 
    setSearchText, author, setIDBranch, branchClick, history,
    searchTextSubmit, addToCart }) => (

        <div>
            <header id="aa-header">
                <HeaderMiddle/>
                </header>
                <p>234</p>

                 <HeaderTop/>
                 <HeaderBottom/>

                <ContentHome
                category={category}

                
                />

           
        </div>

    )

export default Home
