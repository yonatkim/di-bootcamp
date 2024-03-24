import requests
import csv

# Twitter API Bearer Token
bearer_token = 'AAAAAAAAAAAAAAAAAAAAAD60swEAAAAASlY0jl4OpDUmT5Ky0sP5dG4abLM%3DMuyxrFQB9uxGYwXFI6BA2IuFrjh794AlOJxBzgJAGmaWFyXIK0'

# Twitter API endpoint for searching tweets
endpoint_url = 'https://api.twitter.com/2/tweets/search/recent'
#endpoint_url = 'https://api.twitter.com/2/tweets/'

# Function to scrape tweets
def scrape_tweets(query, max_results):
    headers = {
        'Authorization': f'Bearer {bearer_token}'
    }
    params = {
        'query': query,
        'max_results': max_results,
        'tweet.fields': 'text',
    }
    
    response = requests.get(endpoint_url, headers=headers, params=params)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code}, {response.text}")
        return None

# Example usage
query = "antisemitic content"
max_results = 10  # Number of tweets to scrape
tweets_data = scrape_tweets(query, max_results)

# Print scraped tweets
if tweets_data:
    data = {}
    with open('data.csv', 'w') as f:
        csvwriter = csv.writer(f)
        for tweet in tweets_data['data']:
            data.update(tweet['text'])
        csvwriter.writerows(data)
 
   

        
