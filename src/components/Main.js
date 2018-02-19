import React from 'react'
import Link from 'gatsby-link'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import picdisec from '../images/xlargeDISEC.png'
import picunga from '../images/disecRoom.jpg'

var FontAwesome = require('react-fontawesome');

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="committee" className={`${this.props.article === 'committee' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">GA-DISEC</h2>
          <span className="image main"><img src={picdisec} alt="" /></span>
          <h3>General Assembly</h3>
          <p>At the center of the UN system is the 193-member General Assembly (GA), comprised of seven
            main committees and various subsidiary and related bodies. The GA serves primarily as a forum
            for discussing general issues such as international peace and security and international
            collaboration in economic, social, cultural, educational, and health fields. The GA is also able to
            establish committees and other bodies to study and report on specific issues. Although the
            decisions of the GA have no binding legal force upon member-states, they do carry the weight of
            the moral authority of the world community.
          </p>
          <h3>DISEC [First Committee]</h3>
          <span className="image main"><img src={picunga} alt="" /></span>
          <h4>History</h4>
            <p>Established to deal with the technological implications of the atomic bomb used against Japan and in
              development by every other major military power of the day, the General Assembly First Committee of
              1946 focused on all political and security questions of the General Assembly’s agenda. Along with the
              then-unnumbered Special Political Committee, the First Committee provided the stage for the liveliest
              debates between superpowers during the Cold War, centering on armament stockpiling and territorial
              balance between Soviet communism and Western capitalism.</p>
          <h4>Mandate</h4>
            <p>The First Committee deals with disarmament, global challenges and threats to peace that affect the international community and seeks out solutions to the challenges in the international security regime.</p>
            <p>It considers all disarmament and international security matters within the scope of the Charter or relating to the powers and functions of any other organ of the United Nations; the general principles of cooperation in the maintenance of international peace and security, as well as principles governing disarmament and the regulation of armaments; promotion of cooperative arrangements and measures aimed at strengthening stability through lower levels of armaments. </p>
          {close}
        </article>

        <article id="agenda" className={`${this.props.article === 'agenda' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Agenda</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>asdsrcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="eb" className={`${this.props.article === 'eb' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Executive Board</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>asdsrcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="reg" className={`${this.props.article === 'reg' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Registration</h2>
          <p> Follow the steps below <b>strictly</b>.</p>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h2 className="vertical-timeline-element-title"><a href="https://trello.com/invite/b/J0koi0Zj/d7cfb945631185084eb0c4ba25656111/participant-path">Trello<FontAwesome name='trello'/></a></h2>
              <h4 className="vertical-timeline-element-subtitle"></h4>
              <p>
                Click on the heading (Trello), and join the Participants Path board. You may sign in using Google for alacrity.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Countries are being allotted on a first come first served basis. Choose a country of your choice (countries with confirmed delegates are flagged with a red confirmation tag) and leave a comment stating your branch, year and college (if not from HBTU). A moderator will confirm your choice ASAP.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Documents will be uploaded either on Trello itself or here on the website. Participants are advised to check both regularly for the study guide release and the rules.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                There is a list on Trello for delegates to ask their queries. 
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://trello.com/invite/b/J0koi0Zj/d7cfb945631185084eb0c4ba25656111/participant-path" className="icon fa-trello"><span className="label">Trello</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main