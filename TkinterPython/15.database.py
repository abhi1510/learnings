from tkinter import *
import sqlite3

root = Tk()
root.title('Databases')
# root.geometry('400x400')


# Create a table
# cur.execute("""CREATE TABLE addresses(
#     first_name text,
#     last_name text,
#     address text,
#     city text, 
#     state text,
#     zipcode integer)""")

# Create textboxes
f_name = Entry(root, width=30)
f_name.grid(row=0, column=1, padx=20)

l_name = Entry(root, width=30)
l_name.grid(row=1, column=1, padx=20)

address = Entry(root, width=30)
address.grid(row=2, column=1, padx=20)

city = Entry(root, width=30)
city.grid(row=3, column=1, padx=20)

state = Entry(root, width=30)
state.grid(row=4, column=1, padx=20)

zipcode = Entry(root, width=30)
zipcode.grid(row=5, column=1, padx=20)

# Create labels
Label(root, text='First Name').grid(row=0, column=0)
Label(root, text='Last Name').grid(row=1, column=0)
Label(root, text='Address').grid(row=2, column=0)
Label(root, text='City').grid(row=3, column=0)
Label(root, text='State').grid(row=4, column=0)
Label(root, text='Zipcode').grid(row=5, column=0)

def record_to_db():

    # Create a database or connect to one
    conn = sqlite3.connect('sqlite3.db')

    # Create a cursor
    cur = conn.cursor()

    # Insert
    cur.execute('INSERT INTO addresses VALUES (:f_name, :l_name, :address, :city, :state, :zipcode)',
                {
                    'f_name': f_name.get(),
                    'l_name': l_name.get(),
                    'address': address.get(),
                    'city': city.get(),
                    'state': state.get(),
                    'zipcode': zipcode.get()
                })

    # Commit changes
    conn.commit()

    # Close connection
    conn.close()

    # Clear the inputs
    f_name.delete(0, END)
    l_name.delete(0, END)
    address.delete(0, END)
    city.delete(0, END)
    state.delete(0, END)
    zipcode.delete(0, END)

def query_db():
     # Create a database or connect to one
    conn = sqlite3.connect('sqlite3.db')

    # Create a cursor
    cur = conn.cursor()

    # Insert
    cur.execute('SELECT *, oid FROM addresses')
    records = cur.fetchall()
    for record in records:
        print(record)

    # Commit changes
    conn.commit()

    # Close connection
    conn.close()

# Save Btn
saveBtn = Button(root, text='Save Record', command=record_to_db)
saveBtn.grid(row=6, column=0, columnspan=2, padx=10)

# Query Btn
queryBtn = Button(root, text='Show Records', command=query_db)
queryBtn.grid(row=7, column=0, columnspan=2, padx=10)

root.mainloop()