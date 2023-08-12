import psycopg2
import pandas as pd
from sqlalchemy import create_engine, text

alchemy_engine = create_engine('postgresql+psycopg2://root:root@127.0.0.1:5432/postgres')

connection = alchemy_engine.connect()

data = pd.read_csv('data_for_db.csv')
connection.execute(text(
    "INSERT INTO route_difficulties (name, created_at,updated_at) VALUES ('Новичок', '2023-08-11', '2023-08-11' ), ('Знающий', '2023-08-11','2023-08-11' ), ('Опытный', '2023-08-11', '2023-08-11' );"))
connection.commit()

data.to_sql('routes', connection, if_exists = 'append', index = False)