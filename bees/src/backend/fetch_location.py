'''
Created on Jan 30, 2021

@author: Josh
'''

import requests as rq;
from bs4 import BeautifulSoup;
import pymysql as sql

def fetch_info(ipv6):
    headers = {
    'user-agent': 'keycdn-tools:https://example.com',
    }
    
    link = "https://tools.keycdn.com/geo.json?host=%s" % (ipv6)
    
    params = (
        ('host', ipv6),
    )
    
    response = rq.get('https://tools.keycdn.com/geo.json', headers=headers, params=params)
    loc_data = response.json()["data"]["geo"]
    latitude, longitude = loc_data["latitude"], loc_data["longitude"]
    return (latitude, longitude)

def get_local_plants(lat, long):
    url1 = "http://planthardiness.gc.ca/index.pl?m=11&townsearch=&x=+%s&y=%s&lang=en&area=3&names=1&observations=Submit/" % (long, lat)
    plant_data_raw = BeautifulSoup(rq.get(url1).text, "html.parser")
    plants = list(plant_data_raw.find_all('em'))
    for i in range(len(plants)):
        plants[i] = str(plants[i])[4:-5]
    
    return plants

def get_flowering(plants):
    
    conn = sql.connect(
    host = "us-cdbr-east-03.cleardb.com",
    user = "b23d8ec954cbba",
    password = "795b83cc",
    database = "heroku_edbb2c5c151f046"
    );
        
    cursor = conn.cursor()
    
    flowering_plants = []
    
    query = "SELECT flowers.flower_name FROM flowers";
    cursor.execute(query)
    flower_list = [item[0] for item in cursor.fetchall()]
    for flower in flower_list:
        for plant in plants:
            if flower in plant:
                print(flower, plant)
                flowering_plants.append(flower)
                break;
            
    return flowering_plants

print(get_flowering(get_local_plants("43.7687", "-79.4109")))