'''
Created on Jan 30, 2021

@author: Josh
'''
import pymysql as sql
import pandas as pd

if __name__ == "__main__":
    conn = sql.connect(
        host = "us-cdbr-east-03.cleardb.com",
        user = "b23d8ec954cbba",
        password = "", #password not given
        database = "heroku_edbb2c5c151f046"
        );

    cursor = conn.cursor()

    flower_raw = open("flowers")
    flowers = list(flower_raw.read().split(','))

#     try:
#         for flower in flowers:
#             sql = "INSERT INTO flowers (flower_name) VALUES ('%s')" % (flower)
#             print(sql)
#             cursor.execute(sql);
#         conn.commit();
#     except Exception as e:
#         print("oops", e)
