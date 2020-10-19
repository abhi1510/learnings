import sqlite3
from tkinter import *

root = Tk()
root.title('CRM')
root.geometry('400x300')

conn = sqlite3.connect('crm.sqlite3')
cur = conn.cursor()
# Create a table
# cur.execute("""CREATE TABLE customers(
#     first_name text,
#     last_name text,
#     price_paid real,
#     zipcode integer)""")

l_title = Label(root, text='Customer Database', font=('Helvetica'))
l_title.grid(row=0, column=0, columnspan=2, pady="10")



root.mainloop()