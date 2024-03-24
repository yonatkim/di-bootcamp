import tweepy

# Twitter API credentials
consumer_key = 'UcmqEwSv1oW9DPDIetcHBqEbv'
consumer_secret = 'uHJTfBEAMfrhkZZNJONbBytFFrxrzzuI1I73ij5NzIrLQ3WLpa'
access_token = '1770728031176327168-K65Sx3iTEsu5OVdYN5ErhfEHu16zeN'
access_token_secret = 'Hu9ean6fkhLzLeesG175bqnIXdNBBw0v3tyerJWPRW9m3'
# POST 'https://api.twitter.com/2/oauth2/token' \
# --header 'Content-Type: application/x-www-form-urlencoded' \
# --data-urlencode 'refresh_token=bWRWa3gzdnk3WHRGU1o0bmRRcTJ5VUxWX1lZTDdJSUtmaWcxbTVxdEFXcW5tOjE2MjIxNDc3NDM5MTQ6MToxOnJ0OjE' \
# --data-urlencode 'grant_type=refresh_token' \
# --data-urlencode 'client_id=rG9n6402A3dbUJKzXTNX4oWHJ'
ID = '1770730511238836224YonatRaen'
APIkey = 'UcmqEwSv1oW9DPDIetcHBqEbv'
APIleySECRET = 'uHJTfBEAMfrhkZZNJONbBytFFrxrzzuI1I73ij5NzIrLQ3WLpa'
bearerTOKEN = 'AAAAAAAAAAAAAAAAAAAAAD60swEAAAAASlY0jl4OpDUmT5Ky0sP5dG4abLM%3DMuyxrFQB9uxGYwXFI6BA2IuFrjh794AlOJxBzgJAGmaWFyXIK0'


# Authenticate
auth = tweepy.OAuth1UserHandler(consumer_key, consumer_secret, access_token, access_token_secret)

# Create API object
api = tweepy.API(auth)

# Function to scrape tweets
def scrape_tweets(query, count):
    tweets = []
    try:
        # Scrape tweets using the search method
        for tweet in tweepy.Cursor(api.search_tweets, q=query, lang="en").items(count):
            tweets.append(tweet.text)
    except tweepy.TweepyException as e:
        print("Error: " + str(e))
    
    return tweets

# Example usage
query = "anime content"
count = 10  # Number of tweets to scrape
anime_tweets = scrape_tweets(query, count)

# Print scraped tweets
for tweet in anime_tweets:
    print(tweet)
