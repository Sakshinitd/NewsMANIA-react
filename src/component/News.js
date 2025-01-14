import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spiner from './Spiner'
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:5,
    category:'general'

  }
 
  
 

  
  

  constructor(){
    super();
    console.log("hello");
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    console.log("hi");
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df1bc80c06e74de8ad881f36dbd93bde&page=1&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
  }
  handlePrev=async()=>{
      console.log("prev clicked");
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df1bc80c06e74de8ad881f36dbd93bde&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
      this.setState({loading:true})
      let data= await fetch(url);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({
        page:this.state.page-1,
        articles:parsedData.articles,
        loading:false})
  }

  handleNext=async()=>{
    console.log("next clicked");
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){

    }else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df1bc80c06e74de8ad881f36dbd93bde&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false})
    }
}
  
  render() {
    return (
      <>
      <div className="container my-3">
        
        <h2 className="text-center" style={{color:"black",height:'10vh',lineHeight:'10vh',backgroundColor:"orange",border:'2px solid black',fontFamily:'cursive',fontWeight:'bold'}}>NewsMANIA- TOP HEADINGS</h2>
        {this.state.loading && <Spiner/>}
        
            
            <div className="row">
            {this.state.articles && this.state.articles.map((element)=>{ 
                return <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title} description={element.description} imgurl={element.urlToImage} newurl={element.url} author={element.author} date={element.publishedAt}/>
              </div>
            })}
        </div>
        
      </div>
      <div className="container">
      <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; PREVIOUS</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)}type="button" className="btn btn-dark" onClick={this.handleNext}>NEXT &rarr;</button>
      </div>
      </div>
      </>
    )
  }
}
News.propTypes={
  country:PropTypes.string
};

export default News

