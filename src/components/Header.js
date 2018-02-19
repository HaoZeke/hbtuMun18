import Countdown from 'react-count-down'
import React, { Component, PropTypes } from 'react'

const cb = () => {
  console.log('expired callback')
}

const OPTIONS = { endDate: '03/09/2018 10:55 AM', prefix: 'Left', cb}

const EventCountdown = () => (
  <Countdown options={OPTIONS} />
)


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>HBTU MUN 2018</h1>
                <h3> <EventCountdown /> </h3>
                <p>The <a href="https://hbtumun17.netlify.com">second iteration</a> of the <a href="http://hbtu.ac.in/">Harcourt Butler Technical University</a> Model United Nations. Held in tandem with <a href="www.confluencehbti2k18.wixsite.com/hbtu">Confluence</a>.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('committee')}}>Committee</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('agenda')}}>Agenda</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('eb')}}>Executive Board</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('reg')}}>Registration</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
