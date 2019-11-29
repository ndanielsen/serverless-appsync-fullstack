/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTweet = `mutation CreateTweet(
  $tweet: String!
  $consumer_key: String
  $consumer_secret: String
  $access_token_key: String
  $access_token_secret: String
) {
  createTweet(
    tweet: $tweet
    consumer_key: $consumer_key
    consumer_secret: $consumer_secret
    access_token_key: $access_token_key
    access_token_secret: $access_token_secret
  ) {
    tweet_id
    tweet
    retweeted
    retweet_count
    favorited
    created_at
  }
}
`;
export const deleteTweet = `mutation DeleteTweet(
  $tweet_id: String!
  $consumer_key: String
  $consumer_secret: String
  $access_token_key: String
  $access_token_secret: String
) {
  deleteTweet(
    tweet_id: $tweet_id
    consumer_key: $consumer_key
    consumer_secret: $consumer_secret
    access_token_key: $access_token_key
    access_token_secret: $access_token_secret
  ) {
    tweet_id
    tweet
    retweeted
    retweet_count
    favorited
    created_at
  }
}
`;
export const reTweet = `mutation ReTweet(
  $tweet_id: String!
  $consumer_key: String
  $consumer_secret: String
  $access_token_key: String
  $access_token_secret: String
) {
  reTweet(
    tweet_id: $tweet_id
    consumer_key: $consumer_key
    consumer_secret: $consumer_secret
    access_token_key: $access_token_key
    access_token_secret: $access_token_secret
  ) {
    tweet_id
    tweet
    retweeted
    retweet_count
    favorited
    created_at
  }
}
`;
export const updateTweet = `mutation UpdateTweet($tweet_id: String!, $tweet: String!) {
  updateTweet(tweet_id: $tweet_id, tweet: $tweet) {
    tweet_id
    tweet
    retweeted
    retweet_count
    favorited
    created_at
  }
}
`;
export const updateUserInfo = `mutation UpdateUserInfo(
  $location: String!
  $description: String!
  $name: String!
  $followers_count: Int!
  $friends_count: Int!
  $favourites_count: Int!
  $following: [String!]!
) {
  updateUserInfo(
    location: $location
    description: $description
    name: $name
    followers_count: $followers_count
    friends_count: $friends_count
    favourites_count: $favourites_count
    following: $following
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
