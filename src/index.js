import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/seach_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA6maUU_suiVxGjyB9QoPRLD_1ZF4L5YKg';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            
            this.setState({ videos });
        });
    }
    render() {
        return (<div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]} />
            <VideoList videos={
                this.state.videos
            }/>
        </div>);
    }
}
ReactDom.render(<App />, document.querySelector('.container'));
