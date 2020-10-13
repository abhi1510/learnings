from tkinter import *

root = Tk()

# Creating a label widget
label1 = Label(root, text='Hello World!')
label2 = Label(root, text='I am Abhinav Kumar.')
label3 = Label(root, text='A Software Developer')
# Showing it on the screen
label1.grid(row=0, column=0)
label2.grid(row=1, column=1)
label3.grid(row=1, column=2)

root.mainloop()