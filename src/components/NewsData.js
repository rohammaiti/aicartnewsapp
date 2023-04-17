import React, { useEffect, useState } from "react";
import  getNews  from "../NewsService/getNews";
import moment from "moment/moment";
import alanBtn from "@alan-ai/alan-sdk-web";

function NewsData (){

    const [newsData, setNewsData]=useState([]);
    const alanKey='16916e4809e41f52233e994fcd6a41da2e956eca572e1d8b807a3e2338fdd0dc/stage'
    const [selectOPtions, setSelectOption]=useState('');

    const getAllNews=async()=>{
        let data=await getNews(selectOPtions);
        setNewsData(data.data.articles)
    }

    const selectCategory=(event)=>{
        setSelectOption(event.target.value)
    }

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (commandData) => {
                setSelectOption(commandData.data)
            }
        });
      }, []);

    useEffect(()=>{
        getAllNews()
    },[selectOPtions])
    console.log(newsData)

    return(
        <div className="main">
            <h2>AI News- All youur news at a go !!</h2>
            <div className="dropdown">
                <label for="cars">Choose a news category:</label>
                    <select className="dropdown1"
                     name="options"
                      id="options"
                      onChange={selectCategory}>

                    <option value="Science">Science</option>
                    <option value="Health">Health</option>
                    <option value="General">General</option>
                    <option value="Sports">Sports</option>
                    <option value="Business">Business</option>

                </select>
            </div>
            <div className="grid-main">
            {newsData?.map((news)=>{
                return(
                    <div className="grid-news">
                        <img src={news?.urlToImage} className="image"></img>
                        <p className="title">{news?.title}</p>
                        <p>{news?.content}</p>
                        <div className="spacearea">
                            <p>{news?.author ? news?.author:"Anonymous"}</p>
                            <p className="time">{moment(news?.publishedAt).format('LL')}</p>
                        </div>
                        <a href={news?.url} target="_blank">Read More...</a>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default NewsData;