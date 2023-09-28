from psycopg_pool import ConnectionPool
import os

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])
# connection information from environment section in yml file
