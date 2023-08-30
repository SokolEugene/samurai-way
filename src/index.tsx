import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {AppPropsType} from './App';
import {v1} from 'uuid';

export type IndexPropsType = {
    id?: string
    message: string
    likeCounts: number
}

let postData: IndexPropsType[] = [
    {id: v1().slice(0, 8), message:"It's my first post", likeCounts:27},
    {id: v1().slice(0, 8), message:"how are you?", likeCounts: 69},
]

ReactDOM.render(
    <App postData={postData}/>,
  document.getElementById('root')
);