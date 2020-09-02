import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: ''
	};

	componentDidMount() {
		this.onTermSubmit('cute dogs');
	}
	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({
			selectedVideo: video
		});
	};

	render() {
		return (
			<div
				className="ui container"
				style={{
					marginTop: '2vh'
				}}
			>
				<SearchBar onFormSubmit={this.onTermSubmit} />{' '}
				<div className="ui grid">
					<div className="row">
						<div className="ten wide column">
							<VideoDetails video={this.state.selectedVideo} />{' '}
						</div>{' '}
						<div className="six wide column">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</div>
		);
	}
}

export default App;
