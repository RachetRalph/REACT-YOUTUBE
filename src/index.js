import _ from 'lodash';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

// Youtube API key
const API_KEY = 'AIzaSyBGZLx-4PMXkHQEjwUY00bBpBMBWc0H1MI';



// Create a new componets that produces HTML  
// This is a class based components | it needs to be aware of its state 
class App extends Component {
    // Adds constructor and sets initial state, which runs righ away
    constructor(props){
        super(props);
        //App bootsup videos is empty and selected video is null 
        this.state = { 
            videos: [], 
            selectedVideo: null
        };

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        // Search function will be triggered as soon as App is run
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            // ES6: When key & value is the same string 
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500 );
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className='row'>
                    <VideoDetail video={this.state.selectedVideo} />
                    {/* passing state to child components */}
                    <VideoList 
                    // takes vid and updates app's state  
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
                </div>
            </div>
        );
    } 
}
 
// Take component and generate HTML and put it in the DOM 
ReactDOM.render(<App />, document.querySelector(".container"));