import psycopg2
import pandas as pd
from sqlalchemy import create_engine, text

alchemy_engine = create_engine('postgresql+psycopg2://root:root@127.0.0.1:5432/postgres')

connection = alchemy_engine.connect()

data = pd.read_csv('data_for_db.csv')

data.to_sql('routes', connection, if_exists = 'append', index = False)