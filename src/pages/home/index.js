import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'
import { BackTop, QrContent } from './style'

import { HomeWrapper, HomeLeft, HomeRight, QrPop } from './style'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showQr: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  onMouseEnter() {
    this.setState({
      showQr: true
    })
  }

  onMouseLeave() {
    this.setState({
      showQr: false
    })
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          {this.state.showQr && (
            <QrPop>
              <img
                src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
                className="qr-img"
              />
              <div className="rectange"></div>
            </QrPop>
          )}
          <Recommend />
          <QrContent
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <img
              src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              className="qrcode"
            />
            <div className="content">
              <div className="title">下载简书手机App</div>
              <div className="description">随时随地发现和创作内容</div>
            </div>
          </QrContent>
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(
  mapState,
  mapDispatch
)(Home)
