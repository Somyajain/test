import urllib.parse
import requests

url='https://api.coinmarketcap.com/v1/ticker/bitcoin'

json_data=requests.get(url).json()
print(json_data)
print ('\n\n')
data2=json_data[0]
#data2=json_data[0]
data2=json_data[0]['id']
print(data2);