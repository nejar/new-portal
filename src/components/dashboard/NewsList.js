import React, { Component } from "react";
import NewsCard from "./NewsCard";
import { connect } from "react-redux";
import { newsActions } from "../../actions/news.actions";

export class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: null,
    };
  }

  componentDidMount() {
    // fetch(
    // //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=5ebb5a6ed1b2437193a5613470f91932"
    // // )
    // //   .then((response) => response.json())
    // //   .then((result) => {
    // //     // console.log(result);
    // //     this.setState({ newsList: result });
    // //   });

    this.props.getTopNews("us");
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        {this.props.newsList &&
          this.props.newsList.articles.map((article) => (
            <div className="col-md-4">
              <NewsCard {...article} />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newsList: state.news.newsList,
});

const mapDispatchToProps = (dispatch) => ({
  getTopNews: (country_code) => {
    dispatch(newsActions.getTopNews(country_code));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
