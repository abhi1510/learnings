from tkinter import *

root = Tk()

def click_handler():
    label = Label(root, text='Button was clicked')
    label.pack()

# Creating button widgets
button1 = Button(root, text='Button 1')
button2 = Button(root, text='Button 2', state=DISABLED)
button3 = Button(root, text='Button 3', padx=50, pady=10, fg='#ffffff', bg='blue')
button4 = Button(root, text='Click Me', command=click_handler)

# Showing it on the screen
button1.pack()
button2.pack()
button3.pack()
button4.pack()

root.mainloop()