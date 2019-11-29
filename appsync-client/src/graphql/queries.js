/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const meInfo = `query MeInfo($consumer_key: String, $consumer_secret: String) {
  meInfo(consumer_key: $consumer_key, consumer_secret: $consumer_secret) {
    name
    handle
    location
    description
    followers_count
    friends_count
    favourites_count
    following
    topTweet {
      tweet_id
      tweet
      retweeted
      retweet_count
      favorited
      created_at
    }
  }
}
`;
export const getUserInfo = `query GetUserInfo(
  $handle: String!
  $consumer_key: String
  $consumer_secret: String
) {
  getUserInfo(
    handle: $handle
    consumer_key: $consumer_key
    consumer_secret: $consumer_secret
  ) {
    name
    handle
    location
    description
    followers_count
    friends_count
    favourites_count
    following
    topTweet {
      tweet_id
      tweet
      retweeted
      retweet_count
      favorited
      created_at
    }
  }
}
`;
export const searchAllTweetsByKeyword = `query SearchAllTweetsByKeyword($keyword: String!) {
  searchAllTweetsByKeyword(keyword: $keyword) {
    items {
      tweet_id
      tweet
      retweeted
      retweet_count
      favorited
      created_at
    }
    nextToken
  }
}
`;
