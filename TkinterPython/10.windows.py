from tkinter import *

root = Tk()

def open_window():
    top = Toplevel()
    top.title('My Second Window')
    label = Label(top, text='Hello from new window')
    label.pack()

Button(root, text='open window', command=open_window).pack(padx=20, pady=20)

root.mainloop()