import React, { PureComponent } from 'react'
import { WriterWrapper, WriterHeader, WriterFooter, WriterItem } from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators'

class Writer extends PureComponent {
  componentDidMount() {
    console.log('Writer componentDidMount')
    this.props.getWriterList()
  }

  render() {
    const { list } = this.props

    console.log('render')

    return (
      <WriterWrapper>
        <WriterHeader>
          <span>推荐作者</span>
          <span>换一批</span>
        </WriterHeader>

        {list.map((item, index) => {
          return (
            <WriterItem key={index}>
              <img className="user-pic" src={item.get('avatar_source')}></img>
              <div className="content-wrapper">
                <div className="user-name">{item.get('nickname')}</div>
                <div className="user-des">
                  写了{item.get('total_wordage')}字 ·{' '}
                  {item.get('total_likes_count')}喜欢
                </div>
              </div>
              <span className="btn-watch">+关注</span>
            </WriterItem>
          )
        })}

        <Link to="/writelist" style={{ textDecoration: 'none' }}>
          <WriterFooter>查看全部 ></WriterFooter>
        </Link>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = state => ({
  list: state.getIn(['home', 'writerList'])
})

const mapDispatchToProps = dispatch => ({
  getWriterList() {
    dispatch(actionCreators.getWriterList())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writer)
