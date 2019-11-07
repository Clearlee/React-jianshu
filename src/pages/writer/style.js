import styled from 'styled-components'

export const WriterWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  padding-top: 30px;
  .header{
    height: 100px
    background: url('https://cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png');
    background-size: contain;
    line-height: 100px
    .writer-des{
      float: right;
      color: white;
      margin-right: 30px;
    }
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const WriterItem = styled.div`
  position: relative;
  height: 400px;
  width: 320px;
  box-sizing: border-box;
  padding: 0 15px;
  .writer-content{
    &:hover {
      box-shadow: 0 5px 20px rgba(0,0,0,.1)
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 320px;
    margin-top: 80px;
    border: 1px solid #e6e6e6;
    padding: 60px 20px 10px 20px;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    box-sizing: border-box;
    .user-name{
      font-size: 21px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .user-des{
      margin-top: 20px;
      max-width: 180px;
    }
    .watch-btn{
      margin-top: 30px;
      text-align: center;
      width: 100px;
      padding: 8px 0;
      background: #42c02e;
      color: white;
      border-radius: 50px;
    }
    .hr-wrapper{
      width: 100%;
      align-items: center;
      margin-top: 20px
      display: flex;

      .hr{
        margin-left: 10px;
        border-top: 1px solid #eee;
        box-sizing: content-box;
        flex: 1;
      }
      .meta{
        font-size: 12px;
        color: #969696;
        background-color: #f8f8f8;
      }
    }
    .latest-list{
      margin-top: 15px;
      .artical-item{
        font-size: 13px;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .user-img{
    left: 120px;
    top: 40px
    position: absolute;
    border-radius: 50%;
    width: 80px;
    heigth: 80px;
    border: 1px solid #ddd;
    background-color: #fff;
  }
`
