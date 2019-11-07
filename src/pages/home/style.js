import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  position: relative;
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0 0 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 278px;
`

export const WriterHeader = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  color: #969696;
`

export const WriterItem = styled.div`
  margin-top: 15px;
  position: relative;
  display: flex;
  align-items: center;
  .user-pic {
    margin-right: 15px;
    display: flex;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .btn-watch {
    position: absolute;
    right: 0;
    top: 10px;
    font-size: 13px;
    color: #42c02e;
  }
  .content-wrapper {
    .user-name {
      font-size: 14px;
    }
    .user-des {
      color: #969696;
      font-size: 12px;
      margin-top: 10px;
    }
  }
`

export const WriterFooter = styled.div`
  margin-top: 20px;
  text-align: center;
  padding: 7px 7px 7px 12px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`

export const QrPop = styled.div`
  position: absolute;
  left: 48px;
  top: 70px;
  width: 180px;
  height: 180px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  border-radius: 6px;
  .qr-img {
    margin-top: 10px;
    margin-left: 10px;
    width: 160px;
    height: 160px;
  }
  .rectange {
    height: 12px;
    width: 12px;
    margin-top: 2px;
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    transform: rotate(45deg);
    margin-left: 88px;
  }
`

export const QrContent = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  box-sizing: border-box;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .qrcode {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
  .title {
    font-size: 15px;
    color: #333;
  }
  .description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`
