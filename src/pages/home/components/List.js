import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import { IconStyle } from '../../../statics/iconfont/iconfont'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        <IconStyle />
        {list.map((item, index) => {
          return (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <img alt="" className="pic" src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                  <div className="bottom">
                    <div className="zuan-number">
                      <i className="iconfont">&#xe6b2;</i>
                      7.6
                    </div>
                    <span>芳芳的爱美圣经</span>
                    <div className="icon-wrapper">
                      <i className="iconfont">&#xe60b;</i>
                      26
                    </div>
                    <div className="icon-wrapper">
                      <i className="iconfont">&#xe616;</i>
                      20
                    </div>
                  </div>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(
  mapState,
  mapDispatch
)(List)
