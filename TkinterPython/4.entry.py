from tkinter import *

root = Tk()

def click_handler():
    label = Label(root, text='Hello ' + entry.get())
    label.pack()

# Creating a entry widget
entry = Entry(root, width=50, borderwidth=5)
button = Button(root, text='Click Me', command=click_handler)

# Showing it on the screen
entry.pack()
button.pack()

root.mainloop()